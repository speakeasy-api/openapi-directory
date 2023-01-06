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

type Vehicles struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVehicles(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Vehicles {
	return &Vehicles{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetVehicleChargestate - Get Vehicle Charge State
func (s *Vehicles) GetVehicleChargestate(ctx context.Context, request operations.GetVehicleChargestateRequest) (*operations.GetVehicleChargestateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}/charge-state", request.PathParams)

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

	res := &operations.GetVehicleChargestateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetVehicleChargestate200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetVehicleChargestate200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetVehicles - List Vehicles
func (s *Vehicles) GetVehicles(ctx context.Context, request operations.GetVehiclesRequest) (*operations.GetVehiclesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vehicles"

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

	res := &operations.GetVehiclesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Onevehicles1Percent7BvehicleIDPercent7DGetResponses200ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onevehicles1Percent7BvehicleIDPercent7DGetResponses200ContentApplication1jsonSchemas = out
		}
	}

	return res, nil
}

// GetVehiclesVehicleid - Get Vehicle
func (s *Vehicles) GetVehiclesVehicleid(ctx context.Context, request operations.GetVehiclesVehicleidRequest) (*operations.GetVehiclesVehicleidResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}", request.PathParams)

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

	res := &operations.GetVehiclesVehicleidResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetVehiclesVehicleid200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetVehiclesVehicleid200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetVehiclesVehicleidInformation - Get Vehicle Information
func (s *Vehicles) GetVehiclesVehicleidInformation(ctx context.Context, request operations.GetVehiclesVehicleidInformationRequest) (*operations.GetVehiclesVehicleidInformationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}/information", request.PathParams)

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

	res := &operations.GetVehiclesVehicleidInformationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetVehiclesVehicleidInformation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetVehiclesVehicleidInformation200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetVehiclesVehicleidLocation - Get Vehicle Location
func (s *Vehicles) GetVehiclesVehicleidLocation(ctx context.Context, request operations.GetVehiclesVehicleidLocationRequest) (*operations.GetVehiclesVehicleidLocationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}/location", request.PathParams)

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

	res := &operations.GetVehiclesVehicleidLocationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetVehiclesVehicleidLocation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetVehiclesVehicleidLocation200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetVehiclesVehicleidOdometer - Get Vehicle Odometer
func (s *Vehicles) GetVehiclesVehicleidOdometer(ctx context.Context, request operations.GetVehiclesVehicleidOdometerRequest) (*operations.GetVehiclesVehicleidOdometerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}/odometer", request.PathParams)

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

	res := &operations.GetVehiclesVehicleidOdometerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetVehiclesVehicleidOdometer200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetVehiclesVehicleidOdometer200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetVehiclesVehicleidSmartchargingpolicy - Get Vehicle Smart Charging Policy
func (s *Vehicles) GetVehiclesVehicleidSmartchargingpolicy(ctx context.Context, request operations.GetVehiclesVehicleidSmartchargingpolicyRequest) (*operations.GetVehiclesVehicleidSmartchargingpolicyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}/smart-charging-policy", request.PathParams)

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

	res := &operations.GetVehiclesVehicleidSmartchargingpolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// PostVehiclesVehicleidCharging - Start / Stop Charging
// Instruct the vehicle to start or stop charging.
//
// #### Precedence over smart charging
// If the vehicle is at a charging location where smart charging is activated:
// - a request to `start` charging will override smart charging and charging will stay on until fully charged.
// - a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.
//
// The smart charging settings are not altered by these actions.
func (s *Vehicles) PostVehiclesVehicleidCharging(ctx context.Context, request operations.PostVehiclesVehicleidChargingRequest) (*operations.PostVehiclesVehicleidChargingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}/charging", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostVehiclesVehicleidChargingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// PostVehiclesVehicleidWatch - Start Watching Vehicle
// Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.
//
// Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)
//
// The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.
func (s *Vehicles) PostVehiclesVehicleidWatch(ctx context.Context, request operations.PostVehiclesVehicleidWatchRequest) (*operations.PostVehiclesVehicleidWatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}/watch", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostVehiclesVehicleidWatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// PutVehiclesVehicleidSmartchargingpolicy - Update Vehicle Smart Charging Policy
// Updates the Smart Charging settings for a vehicle
func (s *Vehicles) PutVehiclesVehicleidSmartchargingpolicy(ctx context.Context, request operations.PutVehiclesVehicleidSmartchargingpolicyRequest) (*operations.PutVehiclesVehicleidSmartchargingpolicyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/vehicles/{vehicleId}/smart-charging-policy", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutVehiclesVehicleidSmartchargingpolicyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema = out
		}
	}

	return res, nil
}
