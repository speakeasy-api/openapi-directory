package operations

type AppendTextUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
}

type AppendTextUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendTextUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendTextUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendTextUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendTextUsingGetRequest struct {
	QueryParams AppendTextUsingGetQueryParams
}

type AppendTextUsingGetResponse struct {
	ContentType                                string
	StatusCode                                 int64
	AppendTextUsingGET200ApplicationJSONObject *AppendTextUsingGet200ApplicationJSON
	AppendTextUsingGET400ApplicationJSONObject *AppendTextUsingGet400ApplicationJSON
	AppendTextUsingGET401ApplicationJSONObject *AppendTextUsingGet401ApplicationJSON
	AppendTextUsingGET500ApplicationJSONObject *AppendTextUsingGet500ApplicationJSON
}
