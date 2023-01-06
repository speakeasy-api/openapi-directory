package operations

type GetAttributePoolUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetAttributePoolUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAttributePoolUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAttributePoolUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAttributePoolUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetAttributePoolUsingPostRequest struct {
	QueryParams GetAttributePoolUsingPostQueryParams
}

type GetAttributePoolUsingPostResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	GetAttributePoolUsingPOST200ApplicationJSONObject *GetAttributePoolUsingPost200ApplicationJSON
	GetAttributePoolUsingPOST400ApplicationJSONObject *GetAttributePoolUsingPost400ApplicationJSON
	GetAttributePoolUsingPOST401ApplicationJSONObject *GetAttributePoolUsingPost401ApplicationJSON
	GetAttributePoolUsingPOST500ApplicationJSONObject *GetAttributePoolUsingPost500ApplicationJSON
}
