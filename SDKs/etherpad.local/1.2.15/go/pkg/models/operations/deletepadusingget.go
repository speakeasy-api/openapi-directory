package operations

type DeletePadUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type DeletePadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingGetRequest struct {
	QueryParams DeletePadUsingGetQueryParams
}

type DeletePadUsingGetResponse struct {
	ContentType                               string
	StatusCode                                int64
	DeletePadUsingGET200ApplicationJSONObject *DeletePadUsingGet200ApplicationJSON
	DeletePadUsingGET400ApplicationJSONObject *DeletePadUsingGet400ApplicationJSON
	DeletePadUsingGET401ApplicationJSONObject *DeletePadUsingGet401ApplicationJSON
	DeletePadUsingGET500ApplicationJSONObject *DeletePadUsingGet500ApplicationJSON
}
