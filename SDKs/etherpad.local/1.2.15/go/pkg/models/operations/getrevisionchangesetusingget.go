package operations

type GetRevisionChangesetUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type GetRevisionChangesetUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetRevisionChangesetUsingGetRequest struct {
	QueryParams GetRevisionChangesetUsingGetQueryParams
}

type GetRevisionChangesetUsingGetResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GETRevisionChangesetUsingGET200ApplicationJSONObject *GetRevisionChangesetUsingGet200ApplicationJSON
	GETRevisionChangesetUsingGET400ApplicationJSONObject *GetRevisionChangesetUsingGet400ApplicationJSON
	GETRevisionChangesetUsingGET401ApplicationJSONObject *GetRevisionChangesetUsingGet401ApplicationJSON
	GETRevisionChangesetUsingGET500ApplicationJSONObject *GetRevisionChangesetUsingGet500ApplicationJSON
}
