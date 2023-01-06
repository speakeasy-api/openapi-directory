package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type RateLimit struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRateLimit(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *RateLimit {
	return &RateLimit{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetRateLimits - This method retrieves the call limit and utilization data for an application. The data is retrieved for all RESTful APIs and resources. The response from getRateLimits includes a list of the applicable resources and the &quot;call limit&quot;, or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the &quot;time window&quot; to which the quota applies. By default, this method returns utilization data for all RESTful API resources. Use the api_name and api_context query parameters to filter the response to only the desired APIs. For more on call limits, see Compatible Application Check.
func (s *RateLimit) GetRateLimits(ctx context.Context, request operations.GetRateLimitsRequest) (*operations.GetRateLimitsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/rate_limit/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRateLimitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RateLimitsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RateLimitsResponse = out
		}
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetRateLimits500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRateLimits500ApplicationJSONObject = out
		}
	}

	return res, nil
}
