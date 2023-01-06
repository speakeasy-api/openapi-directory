package operations

type SendClientsMessageUsingGetQueryParams struct {
	Msg   *string `queryParam:"style=form,explode=true,name=msg"`
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type SendClientsMessageUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingGetRequest struct {
	QueryParams SendClientsMessageUsingGetQueryParams
}

type SendClientsMessageUsingGetResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	SendClientsMessageUsingGET200ApplicationJSONObject *SendClientsMessageUsingGet200ApplicationJSON
	SendClientsMessageUsingGET400ApplicationJSONObject *SendClientsMessageUsingGet400ApplicationJSON
	SendClientsMessageUsingGET401ApplicationJSONObject *SendClientsMessageUsingGet401ApplicationJSON
	SendClientsMessageUsingGET500ApplicationJSONObject *SendClientsMessageUsingGet500ApplicationJSON
}
