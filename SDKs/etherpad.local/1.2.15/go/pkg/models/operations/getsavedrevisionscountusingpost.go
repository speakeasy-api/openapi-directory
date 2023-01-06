package operations

type GetSavedRevisionsCountUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetSavedRevisionsCountUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetSavedRevisionsCountUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetSavedRevisionsCountUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetSavedRevisionsCountUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetSavedRevisionsCountUsingPostRequest struct {
	QueryParams GetSavedRevisionsCountUsingPostQueryParams
}

type GetSavedRevisionsCountUsingPostResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetSavedRevisionsCountUsingPOST200ApplicationJSONObject *GetSavedRevisionsCountUsingPost200ApplicationJSON
	GetSavedRevisionsCountUsingPOST400ApplicationJSONObject *GetSavedRevisionsCountUsingPost400ApplicationJSON
	GetSavedRevisionsCountUsingPOST401ApplicationJSONObject *GetSavedRevisionsCountUsingPost401ApplicationJSON
	GetSavedRevisionsCountUsingPOST500ApplicationJSONObject *GetSavedRevisionsCountUsingPost500ApplicationJSON
}
