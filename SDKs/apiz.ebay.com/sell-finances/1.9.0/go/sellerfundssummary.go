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

type SellerFundsSummary struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSellerFundsSummary(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SellerFundsSummary {
	return &SellerFundsSummary{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSellerFundsSummary - This method retrieves all pending funds that have not yet been distibuted through a seller payout. There are no input parameters for this method. The response payload includes available funds, funds being processed, funds on hold, and also an aggregate count of all three of these categories. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
func (s *SellerFundsSummary) GetSellerFundsSummary(ctx context.Context, request operations.GetSellerFundsSummaryRequest) (*operations.GetSellerFundsSummaryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/seller_funds_summary"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSellerFundsSummaryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SellerFundsSummaryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SellerFundsSummaryResponse = out
		}
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
