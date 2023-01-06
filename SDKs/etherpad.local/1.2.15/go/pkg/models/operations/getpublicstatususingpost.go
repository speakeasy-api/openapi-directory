package operations

type GetPublicStatusUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetPublicStatusUsingPost200ApplicationJSONData struct {
	PublicStatus *bool `json:"publicStatus,omitempty"`
}

type GetPublicStatusUsingPost200ApplicationJSON struct {
	Code    *int64                                          `json:"code,omitempty"`
	Data    *GetPublicStatusUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                         `json:"message,omitempty"`
}

type GetPublicStatusUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPublicStatusUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPublicStatusUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPublicStatusUsingPostRequest struct {
	QueryParams GetPublicStatusUsingPostQueryParams
}

type GetPublicStatusUsingPostResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetPublicStatusUsingPOST200ApplicationJSONObject *GetPublicStatusUsingPost200ApplicationJSON
	GetPublicStatusUsingPOST400ApplicationJSONObject *GetPublicStatusUsingPost400ApplicationJSON
	GetPublicStatusUsingPOST401ApplicationJSONObject *GetPublicStatusUsingPost401ApplicationJSON
	GetPublicStatusUsingPOST500ApplicationJSONObject *GetPublicStatusUsingPost500ApplicationJSON
}
