package operations

type ListAllGroupsUsingGet200ApplicationJSONData struct {
	GroupIDs []string `json:"groupIDs,omitempty"`
}

type ListAllGroupsUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code,omitempty"`
	Data    *ListAllGroupsUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                      `json:"message,omitempty"`
}

type ListAllGroupsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllGroupsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllGroupsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllGroupsUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ListAllGroupsUsingGET200ApplicationJSONObject *ListAllGroupsUsingGet200ApplicationJSON
	ListAllGroupsUsingGET400ApplicationJSONObject *ListAllGroupsUsingGet400ApplicationJSON
	ListAllGroupsUsingGET401ApplicationJSONObject *ListAllGroupsUsingGet401ApplicationJSON
	ListAllGroupsUsingGET500ApplicationJSONObject *ListAllGroupsUsingGet500ApplicationJSON
}
