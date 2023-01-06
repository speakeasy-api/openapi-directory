package operations

type ListSavedRevisionsUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type ListSavedRevisionsUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSavedRevisionsUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSavedRevisionsUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSavedRevisionsUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListSavedRevisionsUsingPostRequest struct {
	QueryParams ListSavedRevisionsUsingPostQueryParams
}

type ListSavedRevisionsUsingPostResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	ListSavedRevisionsUsingPOST200ApplicationJSONObject *ListSavedRevisionsUsingPost200ApplicationJSON
	ListSavedRevisionsUsingPOST400ApplicationJSONObject *ListSavedRevisionsUsingPost400ApplicationJSON
	ListSavedRevisionsUsingPOST401ApplicationJSONObject *ListSavedRevisionsUsingPost401ApplicationJSON
	ListSavedRevisionsUsingPOST500ApplicationJSONObject *ListSavedRevisionsUsingPost500ApplicationJSON
}
