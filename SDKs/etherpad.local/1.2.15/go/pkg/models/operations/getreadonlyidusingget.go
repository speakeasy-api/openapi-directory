package operations

type GetReadOnlyIDUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetReadOnlyIDUsingGet200ApplicationJSONData struct {
	ReadOnlyID *string `json:"readOnlyID,omitempty"`
}

type GetReadOnlyIDUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code,omitempty"`
	Data    *GetReadOnlyIDUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                      `json:"message,omitempty"`
}

type GetReadOnlyIDUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetReadOnlyIDUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetReadOnlyIDUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetReadOnlyIDUsingGetRequest struct {
	QueryParams GetReadOnlyIDUsingGetQueryParams
}

type GetReadOnlyIDUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GETReadOnlyIDUsingGET200ApplicationJSONObject *GetReadOnlyIDUsingGet200ApplicationJSON
	GETReadOnlyIDUsingGET400ApplicationJSONObject *GetReadOnlyIDUsingGet400ApplicationJSON
	GETReadOnlyIDUsingGET401ApplicationJSONObject *GetReadOnlyIDUsingGet401ApplicationJSON
	GETReadOnlyIDUsingGET500ApplicationJSONObject *GetReadOnlyIDUsingGet500ApplicationJSON
}
