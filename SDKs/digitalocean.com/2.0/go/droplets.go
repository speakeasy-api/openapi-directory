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

type Droplets struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDroplets(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Droplets {
	return &Droplets{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateDroplet - Create a New Droplet
// To create a new Droplet, send a POST request to `/v2/droplets` setting the
// required attributes.
//
// A Droplet will be created using the provided information. The response body
// will contain a JSON object with a key called `droplet`. The value will be an
// object containing the standard attributes for your new Droplet. The response
// code, 202 Accepted, does not indicate the success or failure of the operation,
// just that the request has been accepted for processing. The `actions` returned
// as part of the response's `links` object can be used to check the status
// of the Droplet create event.
//
// ### Create Multiple Droplets
//
// Creating multiple Droplets is very similar to creating a single Droplet.
// Instead of sending `name` as a string, send `names` as an array of strings. A
// Droplet will be created for each name you send using the associated
// information. Up to ten Droplets may be created this way at a time.
//
// Rather than returning a single Droplet, the response body will contain a JSON
// array with a key called `droplets`. This will be set to an array of JSON
// objects, each of which will contain the standard Droplet attributes. The
// response code, 202 Accepted, does not indicate the success or failure of any
// operation, just that the request has been accepted for processing. The array
// of `actions` returned as part of the response's `links` object can be used to
// check the status of each individual Droplet create event.
func (s *Droplets) CreateDroplet(ctx context.Context, request operations.CreateDropletRequest) (*operations.CreateDropletResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/droplets"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateDropletResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateDroplet202ApplicationJSONOneOf = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateDroplet401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateDroplet401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// DestroyDroplet - Delete an Existing Droplet
// To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.
//
// A successful request will receive a 204 status code with no body in response.
// This indicates that the request was processed successfully.
func (s *Droplets) DestroyDroplet(ctx context.Context, request operations.DestroyDropletRequest) (*operations.DestroyDropletResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DestroyDropletResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DestroyDroplet401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DestroyDroplet401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// DestroyDropletsByTag - Deleting Droplets by Tag
// To delete **all** Droplets assigned to a specific tag, include the `tag_name`
// query parameter set to the name of the tag in your DELETE request. For
// example,  `/v2/droplets?tag_name=$TAG_NAME`.
//
// A successful request will receive a 204 status code with no body in response.
// This indicates that the request was processed successfully.
func (s *Droplets) DestroyDropletsByTag(ctx context.Context, request operations.DestroyDropletsByTagRequest) (*operations.DestroyDropletsByTagResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/droplets"

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DestroyDropletsByTagResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DestroyDropletsByTag401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DestroyDropletsByTag401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// DestroyWithAssociatedResourcesDangerous - Destroy a Droplet and All of its Associated Resources (Dangerous)
// To destroy a Droplet along with all of its associated resources, send a DELETE
// request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`
// endpoint. The headers of this request must include an `X-Dangerous` key set to
// `true`. To preview which resources will be destroyed, first query the
// Droplet's associated resources. This operation _can not_ be reverse and should
// be used with caution.
//
// A successful response will include a 202 response code and no content. Use the
// status endpoint to check on the success or failure of the destruction of the
// individual resources.
func (s *Droplets) DestroyWithAssociatedResourcesDangerous(ctx context.Context, request operations.DestroyWithAssociatedResourcesDangerousRequest) (*operations.DestroyWithAssociatedResourcesDangerousResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DestroyWithAssociatedResourcesDangerousResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DestroyWithAssociatedResourcesDangerous401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DestroyWithAssociatedResourcesDangerous401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// DestroyWithAssociatedResourcesSelective - Selectively Destroy a Droplet and its Associated Resources
// To destroy a Droplet along with a sub-set of its associated resources, send a
// DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`
// endpoint. The JSON body of the request should include `snapshots`, `volumes`,
// or `volume_snapshots` keys each set to an array of IDs for the associated
// resources to be destroyed. The IDs can be found by querying the Droplet's
// associated resources. Any associated resource not included in the request
// will remain and continue to accrue changes on your account.
//
// A successful response will include a 202 response code and no content. Use
// the status endpoint to check on the success or failure of the destruction of
// the individual resources.
func (s *Droplets) DestroyWithAssociatedResourcesSelective(ctx context.Context, request operations.DestroyWithAssociatedResourcesSelectiveRequest) (*operations.DestroyWithAssociatedResourcesSelectiveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources/selective", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DestroyWithAssociatedResourcesSelectiveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DestroyWithAssociatedResourcesSelective401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DestroyWithAssociatedResourcesSelective401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// GetDestroyWithAssociatedResourcesStatus - Check Status of a Droplet Destroy with Associated Resources Request
// To check on the status of a request to destroy a Droplet with its associated
// resources, send a GET request to the
// `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.
func (s *Droplets) GetDestroyWithAssociatedResourcesStatus(ctx context.Context, request operations.GetDestroyWithAssociatedResourcesStatusRequest) (*operations.GetDestroyWithAssociatedResourcesStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources/status", request.PathParams)

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

	res := &operations.GetDestroyWithAssociatedResourcesStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetDestroyWithAssociatedResourcesStatus200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDestroyWithAssociatedResourcesStatus200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetDestroyWithAssociatedResourcesStatus401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDestroyWithAssociatedResourcesStatus401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// GetDroplet - Retrieve an Existing Droplet
// To show information about an individual Droplet, send a GET request to
// `/v2/droplets/$DROPLET_ID`.
func (s *Droplets) GetDroplet(ctx context.Context, request operations.GetDropletRequest) (*operations.GetDropletResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}", request.PathParams)

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

	res := &operations.GetDropletResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDroplet200ApplicationJSONAny = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetDroplet401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDroplet401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// ListAllDropletNeighborsIds - List All Droplet Neighbors
// To retrieve a list of all Droplets that are co-located on the same physical
// hardware, send a GET request to `/v2/reports/droplet_neighbors_ids`.
//
// The results will be returned as a JSON object with a key of `neighbor_ids`.
// This will be set to an array of arrays. Each array will contain a set of
// Droplet IDs for Droplets that share a physical server. An empty array
// indicates that all Droplets associated with your account are located on
// separate physical hardware.
func (s *Droplets) ListAllDropletNeighborsIds(ctx context.Context) (*operations.ListAllDropletNeighborsIdsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/reports/droplet_neighbors_ids"

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

	res := &operations.ListAllDropletNeighborsIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListAllDropletNeighborsIds200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAllDropletNeighborsIds200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListAllDropletNeighborsIds401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAllDropletNeighborsIds401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// ListAllDroplets - List All Droplets
// To list all Droplets in your account, send a GET request to `/v2/droplets`.
//
// The response body will be a JSON object with a key of `droplets`. This will be
// set to an array containing objects each representing a Droplet. These will
// contain the standard Droplet attributes.
//
// ### Filtering Results by Tag
//
// It's possible to request filtered results by including certain query parameters.
// To only list Droplets assigned to a specific tag, include the `tag_name` query
// parameter set to the name of the tag in your GET request. For example,
// `/v2/droplets?tag_name=$TAG_NAME`.
func (s *Droplets) ListAllDroplets(ctx context.Context, request operations.ListAllDropletsRequest) (*operations.ListAllDropletsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/droplets"

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

	res := &operations.ListAllDropletsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListAllDroplets200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAllDroplets200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListAllDroplets401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListAllDroplets401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// ListDropletAssociatedResources - List Associated Resources for a Droplet
// To list the associated billable resources that can be destroyed along with a
// Droplet, send a GET request to the
// `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.
//
// The response will be a JSON object containing `snapshots`, `volumes`, and
// `volume_snapshots` keys. Each will be set to an array of objects containing
// information about the associated resources.
func (s *Droplets) ListDropletAssociatedResources(ctx context.Context, request operations.ListDropletAssociatedResourcesRequest) (*operations.ListDropletAssociatedResourcesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources", request.PathParams)

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

	res := &operations.ListDropletAssociatedResourcesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletAssociatedResources200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletAssociatedResources200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletAssociatedResources401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletAssociatedResources401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// ListDropletBackups - List Backups for a Droplet
// To retrieve any backups associated with a Droplet, send a GET request to
// `/v2/droplets/$DROPLET_ID/backups`.
//
// You will get back a JSON object that has a `backups` key. This will be set to
// an array of backup objects, each of which contain the standard
// Droplet backup attributes.
func (s *Droplets) ListDropletBackups(ctx context.Context, request operations.ListDropletBackupsRequest) (*operations.ListDropletBackupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/backups", request.PathParams)

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

	res := &operations.ListDropletBackupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletBackups200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletBackups200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletBackups401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletBackups401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// ListDropletFirewalls - List all Firewalls Applied to a Droplet
// To retrieve a list of all firewalls available to a Droplet, send a GET request
// to `/v2/droplets/$DROPLET_ID/firewalls`
//
// The response will be a JSON object that has a key called `firewalls`. This will
// be set to an array of `firewall` objects, each of which contain the standard
// `firewall` attributes.
func (s *Droplets) ListDropletFirewalls(ctx context.Context, request operations.ListDropletFirewallsRequest) (*operations.ListDropletFirewallsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/firewalls", request.PathParams)

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

	res := &operations.ListDropletFirewallsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletFirewalls200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletFirewalls200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletFirewalls401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletFirewalls401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// ListDropletKernels - List All Available Kernels for a Droplet
// To retrieve a list of all kernels available to a Droplet, send a GET request
// to `/v2/droplets/$DROPLET_ID/kernels`
//
// The response will be a JSON object that has a key called `kernels`. This will
// be set to an array of `kernel` objects, each of which contain the standard
// `kernel` attributes.
func (s *Droplets) ListDropletKernels(ctx context.Context, request operations.ListDropletKernelsRequest) (*operations.ListDropletKernelsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/kernels", request.PathParams)

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

	res := &operations.ListDropletKernelsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletKernels200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletKernels200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletKernels401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletKernels401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// ListDropletNeighbors - List Neighbors for a Droplet
// To retrieve a list of any "neighbors" (i.e. Droplets that are co-located on
// the same physical hardware) for a specific Droplet, send a GET request to
// `/v2/droplets/$DROPLET_ID/neighbors`.
//
// The results will be returned as a JSON object with a key of `droplets`. This
// will be set to an array containing objects representing any other Droplets
// that share the same physical hardware. An empty array indicates that the
// Droplet is not co-located any other Droplets associated with your account.
func (s *Droplets) ListDropletNeighbors(ctx context.Context, request operations.ListDropletNeighborsRequest) (*operations.ListDropletNeighborsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/neighbors", request.PathParams)

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

	res := &operations.ListDropletNeighborsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletNeighbors200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletNeighbors200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletNeighbors401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletNeighbors401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// ListDropletSnapshots - List Snapshots for a Droplet
// To retrieve the snapshots that have been created from a Droplet, send a GET
// request to `/v2/droplets/$DROPLET_ID/snapshots`.
//
// You will get back a JSON object that has a `snapshots` key. This will be set
// to an array of snapshot objects, each of which contain the standard Droplet
// snapshot attributes.
func (s *Droplets) ListDropletSnapshots(ctx context.Context, request operations.ListDropletSnapshotsRequest) (*operations.ListDropletSnapshotsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/snapshots", request.PathParams)

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

	res := &operations.ListDropletSnapshotsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletSnapshots200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletSnapshots200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListDropletSnapshots401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDropletSnapshots401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// RetryDestroyWithAssociatedResource - Retry a Droplet Destroy with Associated Resources Request
// If the status of a request to destroy a Droplet with its associated resources
// reported any errors, it can be retried by sending a POST request to the
// `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.
//
// Only one destroy can be active at a time per Droplet. If a retry is issued
// while another destroy is in progress for the Droplet a 409 status code will
// be returned. A successful response will include a 202 response code and no
// content.
func (s *Droplets) RetryDestroyWithAssociatedResource(ctx context.Context, request operations.RetryDestroyWithAssociatedResourceRequest) (*operations.RetryDestroyWithAssociatedResourceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources/retry", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.RetryDestroyWithAssociatedResourceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 401:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RetryDestroyWithAssociatedResource401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetryDestroyWithAssociatedResource401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 409:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	case httpRes.StatusCode == 500:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	default:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onev211ClicksGetResponses401ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}
