package operations

type SetHTMLUsingGetQueryParams struct {
	HTML  *string `queryParam:"style=form,explode=true,name=html"`
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type SetHTMLUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetHTMLUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetHTMLUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetHTMLUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetHTMLUsingGetRequest struct {
	QueryParams SetHTMLUsingGetQueryParams
}

type SetHTMLUsingGetResponse struct {
	ContentType                             string
	StatusCode                              int64
	SetHTMLUsingGET200ApplicationJSONObject *SetHTMLUsingGet200ApplicationJSON
	SetHTMLUsingGET400ApplicationJSONObject *SetHTMLUsingGet400ApplicationJSON
	SetHTMLUsingGET401ApplicationJSONObject *SetHTMLUsingGet401ApplicationJSON
	SetHTMLUsingGET500ApplicationJSONObject *SetHTMLUsingGet500ApplicationJSON
}
