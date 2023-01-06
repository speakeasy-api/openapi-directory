package operations

type ListSavedRevisionsUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type ListSavedRevisionsUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSavedRevisionsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSavedRevisionsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSavedRevisionsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSavedRevisionsUsingGetRequest struct {
	QueryParams ListSavedRevisionsUsingGetQueryParams
}

type ListSavedRevisionsUsingGetResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ListSavedRevisionsUsingGET200ApplicationJSONObject *ListSavedRevisionsUsingGet200ApplicationJSON
	ListSavedRevisionsUsingGET400ApplicationJSONObject *ListSavedRevisionsUsingGet400ApplicationJSON
	ListSavedRevisionsUsingGET401ApplicationJSONObject *ListSavedRevisionsUsingGet401ApplicationJSON
	ListSavedRevisionsUsingGET500ApplicationJSONObject *ListSavedRevisionsUsingGet500ApplicationJSON
}
