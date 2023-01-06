package operations

type ListSessionsOfAuthorUsingGetQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
}

type ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions struct {
	AuthorID   *string `json:"authorID,omitempty"`
	GroupID    *string `json:"groupID,omitempty"`
	ID         *string `json:"id,omitempty"`
	ValidUntil *int64  `json:"validUntil,omitempty"`
}

type ListSessionsOfAuthorUsingGet200ApplicationJSONData struct {
	Sessions []ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions `json:"sessions,omitempty"`
}

type ListSessionsOfAuthorUsingGet200ApplicationJSON struct {
	Code    *int64                                              `json:"code,omitempty"`
	Data    *ListSessionsOfAuthorUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                             `json:"message,omitempty"`
}

type ListSessionsOfAuthorUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfAuthorUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfAuthorUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSessionsOfAuthorUsingGetRequest struct {
	QueryParams ListSessionsOfAuthorUsingGetQueryParams
}

type ListSessionsOfAuthorUsingGetResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	ListSessionsOfAuthorUsingGET200ApplicationJSONObject *ListSessionsOfAuthorUsingGet200ApplicationJSON
	ListSessionsOfAuthorUsingGET400ApplicationJSONObject *ListSessionsOfAuthorUsingGet400ApplicationJSON
	ListSessionsOfAuthorUsingGET401ApplicationJSONObject *ListSessionsOfAuthorUsingGet401ApplicationJSON
	ListSessionsOfAuthorUsingGET500ApplicationJSONObject *ListSessionsOfAuthorUsingGet500ApplicationJSON
}
