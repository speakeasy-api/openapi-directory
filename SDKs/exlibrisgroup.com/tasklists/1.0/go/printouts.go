package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Printouts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPrintouts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Printouts {
	return &Printouts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetAlmawsV1TaskListsPrintouts - Retrieve Printouts
// This API returns a list of Printouts.
func (s *Printouts) GetAlmawsV1TaskListsPrintouts(ctx context.Context, request operations.GetAlmawsV1TaskListsPrintoutsRequest) (*operations.GetAlmawsV1TaskListsPrintoutsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/almaws/v1/task-lists/printouts"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAlmawsV1TaskListsPrintoutsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetAlmawsV1TaskListsPrintouts200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetAlmawsV1TaskListsPrintouts200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetAlmawsV1TaskListsPrintoutsPrintoutID - Retrieve a Printout
// This Web service returns a Printout given a Printout ID.
func (s *Printouts) GetAlmawsV1TaskListsPrintoutsPrintoutID(ctx context.Context, request operations.GetAlmawsV1TaskListsPrintoutsPrintoutIDRequest) (*operations.GetAlmawsV1TaskListsPrintoutsPrintoutIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/almaws/v1/task-lists/printouts/{printout_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAlmawsV1TaskListsPrintoutsPrintoutIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostAlmawsV1TaskListsPrintouts - Act on Printouts
// This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.
func (s *Printouts) PostAlmawsV1TaskListsPrintouts(ctx context.Context, request operations.PostAlmawsV1TaskListsPrintoutsRequest) (*operations.PostAlmawsV1TaskListsPrintoutsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/almaws/v1/task-lists/printouts"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAlmawsV1TaskListsPrintoutsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// PostAlmawsV1TaskListsPrintoutsPrintoutID - Printout Service
// This API operates on an printout. given a Printout ID.
func (s *Printouts) PostAlmawsV1TaskListsPrintoutsPrintoutID(ctx context.Context, request operations.PostAlmawsV1TaskListsPrintoutsPrintoutIDRequest) (*operations.PostAlmawsV1TaskListsPrintoutsPrintoutIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/almaws/v1/task-lists/printouts/{printout_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAlmawsV1TaskListsPrintoutsPrintoutIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
