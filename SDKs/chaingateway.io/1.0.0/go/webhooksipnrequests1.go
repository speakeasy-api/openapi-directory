// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

// webhooksIPNRequests1 - With webhooks, you can get notified about various events in the blockchain. E.g:
//
// Receipt of payment to a specific address
// Outgoing payment from a specific address
// Exchange of sats between two specific addresses
// Execution of a contract
// Change of ownership of a token
//
// For this you have to create a webhook with certain filter criteria. The following values are available as filter criteria:
//
// from: Outgoing address
// to: Incoming address
// contract: Contract that should be monitored
// tokenid: ID of a token that should be monitored.
// type: Token type (\[ETH', 'ERC20', 'ERC721', null)
//
// Parameter "url" defines the url we are calling with a POST Request.. The request body will have your filter criterias and some additional informatiion about your transaction:
//
// ``` json
//
//	{
//	  "id": "63a1ae0887ca3625b82b4924",
//	  "webhook_id": "63a1ad0e87ca3625b82b4923",
//	  "from": "0x0000000000000000000000000000000000000000",
//	  "to": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
//	  "blocknumber": "123",
//	  "datetime": "22-12-20 13:43:52",
//	  "tokenid": "0x0000000000000000000000000000000000000000",
//	  "type": null,
//	  "txid": "000000000000000000000000000000000000000000000000000",
//	  "amount": "000000000000000000000000000000000000000000000000000"
//	}
//
// ```
type webhooksIPNRequests1 struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newWebhooksIPNRequests1(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *webhooksIPNRequests1 {
	return &webhooksIPNRequests1{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

// Listfailedipns1 - listFailedIPNs
// Returns all subscriptions/IPNs created with an account.
func (s *webhooksIPNRequests1) Listfailedipns1(ctx context.Context, request operations.Listfailedipns1Request) (*operations.Listfailedipns1Response, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/v2/polygon/webkhooks/{webhook}/notifications/failed", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Listfailedipns1Response{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.Listfailedipns1200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Listfailedipns1200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// Listipnsbywebhookid1 - listIPNsByWebhookId
// Returns all subscriptions/IPNs created with an account.
func (s *webhooksIPNRequests1) Listipnsbywebhookid1(ctx context.Context) (*operations.Listipnsbywebhookid1Response, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/polygon/webkhooks/notifications/failed"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Listipnsbywebhookid1Response{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.Listipnsbywebhookid1200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Listipnsbywebhookid1200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// Listsubscribedaddresses1 - listSubscribedAddresses
// Returns all subscriptions/IPNs created with an account.
func (s *webhooksIPNRequests1) Listsubscribedaddresses1(ctx context.Context) (*operations.Listsubscribedaddresses1Response, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/polygon/webhooks"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Listsubscribedaddresses1Response{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.Listsubscribedaddresses1200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Listsubscribedaddresses1200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// Resendfailedipn1 - resendFailedIPN
// Returns all subscriptions/IPNs created with an account.
func (s *webhooksIPNRequests1) Resendfailedipn1(ctx context.Context, request operations.Resendfailedipn1Request) (*operations.Resendfailedipn1Response, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/v2/polygon/webhooks/notifications/failed/{notification_id}", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "RequestBody", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Resendfailedipn1Response{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.Resendfailedipn1200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Resendfailedipn1200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// Subscribeaddress1 - subscribeAddress
// Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
//
// # You can choose one or more from following filter criterias
//
// | **Parameter** | **Description** |
// | --- | --- |
// | from | ethereum address |
// | to | ethereum address |
// | contractaddress | contract address |
// | tokenid | token id |
//
// You also need to dpecify the parameter "type". you can choose between \['ETH', 'ERC20', 'ERC721', null\]
func (s *webhooksIPNRequests1) Subscribeaddress1(ctx context.Context, request operations.Subscribeaddress1RequestBody) (*operations.Subscribeaddress1Response, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/polygon/webhooks"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "Request", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Subscribeaddress1Response{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.Subscribeaddress1200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Subscribeaddress1200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// Unsubscribeaddress1 - unsubscribeAddress
// Deletes an existing subscription/IPN for the given address (and contractaddress).
func (s *webhooksIPNRequests1) Unsubscribeaddress1(ctx context.Context, request operations.Unsubscribeaddress1Request) (*operations.Unsubscribeaddress1Response, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/v2/polygon/webhooks/{webhook}", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Unsubscribeaddress1Response{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.Unsubscribeaddress1200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Unsubscribeaddress1200ApplicationJSONObject = out
		}
	}

	return res, nil
}
