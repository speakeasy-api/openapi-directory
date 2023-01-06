package operations

type ListSessionsOfGroupUsingGetQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type ListSessionsOfGroupUsingGet200ApplicationJSONDataSessions struct {
	AuthorID   *string `json:"authorID,omitempty"`
	GroupID    *string `json:"groupID,omitempty"`
	ID         *string `json:"id,omitempty"`
	ValidUntil *int64  `json:"validUntil,omitempty"`
}

type ListSessionsOfGroupUsingGet200ApplicationJSONData struct {
	Sessions []ListSessionsOfGroupUsingGet200ApplicationJSONDataSessions `json:"sessions,omitempty"`
}

type ListSessionsOfGroupUsingGet200ApplicationJSON struct {
	Code    *int64                                             `json:"code,omitempty"`
	Data    *ListSessionsOfGroupUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                            `json:"message,omitempty"`
}

type ListSessionsOfGroupUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfGroupUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfGroupUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfGroupUsingGetRequest struct {
	QueryParams ListSessionsOfGroupUsingGetQueryParams
}

type ListSessionsOfGroupUsingGetResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	ListSessionsOfGroupUsingGET200ApplicationJSONObject *ListSessionsOfGroupUsingGet200ApplicationJSON
	ListSessionsOfGroupUsingGET400ApplicationJSONObject *ListSessionsOfGroupUsingGet400ApplicationJSON
	ListSessionsOfGroupUsingGET401ApplicationJSONObject *ListSessionsOfGroupUsingGet401ApplicationJSON
	ListSessionsOfGroupUsingGET500ApplicationJSONObject *ListSessionsOfGroupUsingGet500ApplicationJSON
}
