package operations

type SaveRevisionUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type SaveRevisionUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SaveRevisionUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SaveRevisionUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SaveRevisionUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SaveRevisionUsingGetRequest struct {
	QueryParams SaveRevisionUsingGetQueryParams
}

type SaveRevisionUsingGetResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	SaveRevisionUsingGET200ApplicationJSONObject *SaveRevisionUsingGet200ApplicationJSON
	SaveRevisionUsingGET400ApplicationJSONObject *SaveRevisionUsingGet400ApplicationJSON
	SaveRevisionUsingGET401ApplicationJSONObject *SaveRevisionUsingGet401ApplicationJSON
	SaveRevisionUsingGET500ApplicationJSONObject *SaveRevisionUsingGet500ApplicationJSON
}
