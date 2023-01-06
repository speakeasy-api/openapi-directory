package operations

type CheckTokenUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingPostResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	CheckTokenUsingPOST200ApplicationJSONObject *CheckTokenUsingPost200ApplicationJSON
	CheckTokenUsingPOST400ApplicationJSONObject *CheckTokenUsingPost400ApplicationJSON
	CheckTokenUsingPOST401ApplicationJSONObject *CheckTokenUsingPost401ApplicationJSON
	CheckTokenUsingPOST500ApplicationJSONObject *CheckTokenUsingPost500ApplicationJSON
}
