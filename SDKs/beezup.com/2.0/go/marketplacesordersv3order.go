package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type MarketplacesOrdersV3Order struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMarketplacesOrdersV3Order(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MarketplacesOrdersV3Order {
	return &MarketplacesOrdersV3Order{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ChangeOrderV3 - Change your marketplace Order Information (accept, ship, etc.)
func (s *MarketplacesOrdersV3Order) ChangeOrderV3(ctx context.Context, request operations.ChangeOrderV3Request) (*operations.ChangeOrderV3Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/{changeOrderType}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ChangeOrderV3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	case httpRes.StatusCode == 412:
		res.Headers = httpRes.Header

	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}

// ClearMerchantOrderInfoV3 - Clear an Order's merchant information
func (s *MarketplacesOrdersV3Order) ClearMerchantOrderInfoV3(ctx context.Context, request operations.ClearMerchantOrderInfoV3Request) (*operations.ClearMerchantOrderInfoV3Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/clearMerchantOrderInfo", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ClearMerchantOrderInfoV3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}

// GetOrderChangeReportingV3 - Get the order change reporting
// This operation will help you to know the status of your order change operation
func (s *MarketplacesOrdersV3Order) GetOrderChangeReportingV3(ctx context.Context, request operations.GetOrderChangeReportingV3Request) (*operations.GetOrderChangeReportingV3Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/history/{orderChangeExecutionUUID}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrderChangeReportingV3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ChangeOrderReporting
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ChangeOrderReporting = out
		}
	case httpRes.StatusCode == 304:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}

// GetOrderHistoryV3 - Get an Order's harvest and change history
func (s *MarketplacesOrdersV3Order) GetOrderHistoryV3(ctx context.Context, request operations.GetOrderHistoryV3Request) (*operations.GetOrderHistoryV3Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/history", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrderHistoryV3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrderHistory
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrderHistory = out
		}
	case httpRes.StatusCode == 304:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}

// GetOrderV3 - Get full Order and Order Item(s) properties
func (s *MarketplacesOrdersV3Order) GetOrderV3(ctx context.Context, request operations.GetOrderV3Request) (*operations.GetOrderV3Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrderV3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OrderWithLinks1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrderWithLinks = out
		}
	case httpRes.StatusCode == 304:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}

// HarvestAccount - Send harvest request for an Account
func (s *MarketplacesOrdersV3Order) HarvestAccount(ctx context.Context, request operations.HarvestAccountRequest) (*operations.HarvestAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/harvest", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HarvestAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}

// HarvestOrderV3 - Send harvest request for a single Order
func (s *MarketplacesOrdersV3Order) HarvestOrderV3(ctx context.Context, request operations.HarvestOrderV3Request) (*operations.HarvestOrderV3Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/harvest", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HarvestOrderV3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}

// HeadOrderV3 - Get the meta information about the order (ETag, Last-Modified)
// The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
// This could be useful
func (s *MarketplacesOrdersV3Order) HeadOrderV3(ctx context.Context, request operations.HeadOrderV3Request) (*operations.HeadOrderV3Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "HEAD", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeadOrderV3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 304:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}

// SetMerchantOrderInfoV3 - Set an Order's merchant information
func (s *MarketplacesOrdersV3Order) SetMerchantOrderInfoV3(ctx context.Context, request operations.SetMerchantOrderInfoV3Request) (*operations.SetMerchantOrderInfoV3Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orders/v3/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/setMerchantOrderInfo", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SetMerchantOrderInfoV3Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseMessage = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BeezUpCommonErrorResponseMessage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BeezUPCommonErrorResponseMessage = out
		}
	}

	return res, nil
}
