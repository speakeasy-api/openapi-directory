package operations

type DeleteSessionUsingGetQueryParams struct {
	SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
}

type DeleteSessionUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteSessionUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteSessionUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteSessionUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteSessionUsingGetRequest struct {
	QueryParams DeleteSessionUsingGetQueryParams
}

type DeleteSessionUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	DeleteSessionUsingGET200ApplicationJSONObject *DeleteSessionUsingGet200ApplicationJSON
	DeleteSessionUsingGET400ApplicationJSONObject *DeleteSessionUsingGet400ApplicationJSON
	DeleteSessionUsingGET401ApplicationJSONObject *DeleteSessionUsingGet401ApplicationJSON
	DeleteSessionUsingGET500ApplicationJSONObject *DeleteSessionUsingGet500ApplicationJSON
}
