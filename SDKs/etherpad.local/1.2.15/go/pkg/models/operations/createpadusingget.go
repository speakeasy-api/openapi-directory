package operations

type CreatePadUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
}

type CreatePadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingGetRequest struct {
	QueryParams CreatePadUsingGetQueryParams
}

type CreatePadUsingGetResponse struct {
	ContentType                               string
	StatusCode                                int64
	CreatePadUsingGET200ApplicationJSONObject *CreatePadUsingGet200ApplicationJSON
	CreatePadUsingGET400ApplicationJSONObject *CreatePadUsingGet400ApplicationJSON
	CreatePadUsingGET401ApplicationJSONObject *CreatePadUsingGet401ApplicationJSON
	CreatePadUsingGET500ApplicationJSONObject *CreatePadUsingGet500ApplicationJSON
}
