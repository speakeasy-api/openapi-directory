package operations

type ListAllGroupsUsingPost200ApplicationJSONData struct {
	GroupIDs []string `json:"groupIDs,omitempty"`
}

type ListAllGroupsUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code,omitempty"`
	Data    *ListAllGroupsUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                       `json:"message,omitempty"`
}

type ListAllGroupsUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllGroupsUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllGroupsUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListAllGroupsUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ListAllGroupsUsingPOST200ApplicationJSONObject *ListAllGroupsUsingPost200ApplicationJSON
	ListAllGroupsUsingPOST400ApplicationJSONObject *ListAllGroupsUsingPost400ApplicationJSON
	ListAllGroupsUsingPOST401ApplicationJSONObject *ListAllGroupsUsingPost401ApplicationJSON
	ListAllGroupsUsingPOST500ApplicationJSONObject *ListAllGroupsUsingPost500ApplicationJSON
}
