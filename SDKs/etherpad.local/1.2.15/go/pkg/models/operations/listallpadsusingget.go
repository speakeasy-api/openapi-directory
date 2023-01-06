package operations

type ListAllPadsUsingGet200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs,omitempty"`
}

type ListAllPadsUsingGet200ApplicationJSON struct {
	Code    *int64                                     `json:"code,omitempty"`
	Data    *ListAllPadsUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                    `json:"message,omitempty"`
}

type ListAllPadsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllPadsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllPadsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllPadsUsingGetResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ListAllPadsUsingGET200ApplicationJSONObject *ListAllPadsUsingGet200ApplicationJSON
	ListAllPadsUsingGET400ApplicationJSONObject *ListAllPadsUsingGet400ApplicationJSON
	ListAllPadsUsingGET401ApplicationJSONObject *ListAllPadsUsingGet401ApplicationJSON
	ListAllPadsUsingGET500ApplicationJSONObject *ListAllPadsUsingGet500ApplicationJSON
}
