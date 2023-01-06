package operations

type CheckTokenUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CheckTokenUsingGetResponse struct {
	ContentType                                string
	StatusCode                                 int64
	CheckTokenUsingGET200ApplicationJSONObject *CheckTokenUsingGet200ApplicationJSON
	CheckTokenUsingGET400ApplicationJSONObject *CheckTokenUsingGet400ApplicationJSON
	CheckTokenUsingGET401ApplicationJSONObject *CheckTokenUsingGet401ApplicationJSON
	CheckTokenUsingGET500ApplicationJSONObject *CheckTokenUsingGet500ApplicationJSON
}
