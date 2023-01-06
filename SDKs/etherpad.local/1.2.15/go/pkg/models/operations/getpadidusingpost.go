package operations

type GetPadIDUsingPostQueryParams struct {
	RoID *string `queryParam:"style=form,explode=true,name=roID"`
}

type GetPadIDUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPadIDUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPadIDUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPadIDUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetPadIDUsingPostRequest struct {
	QueryParams GetPadIDUsingPostQueryParams
}

type GetPadIDUsingPostResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetPadIDUsingPOST200ApplicationJSONObject *GetPadIDUsingPost200ApplicationJSON
	GetPadIDUsingPOST400ApplicationJSONObject *GetPadIDUsingPost400ApplicationJSON
	GetPadIDUsingPOST401ApplicationJSONObject *GetPadIDUsingPost401ApplicationJSON
	GetPadIDUsingPOST500ApplicationJSONObject *GetPadIDUsingPost500ApplicationJSON
}
