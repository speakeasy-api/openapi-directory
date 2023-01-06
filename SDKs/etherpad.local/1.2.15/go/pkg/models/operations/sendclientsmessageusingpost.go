package operations

type SendClientsMessageUsingPostQueryParams struct {
	Msg   *string `queryParam:"style=form,explode=true,name=msg"`
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type SendClientsMessageUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SendClientsMessageUsingPostRequest struct {
	QueryParams SendClientsMessageUsingPostQueryParams
}

type SendClientsMessageUsingPostResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	SendClientsMessageUsingPOST200ApplicationJSONObject *SendClientsMessageUsingPost200ApplicationJSON
	SendClientsMessageUsingPOST400ApplicationJSONObject *SendClientsMessageUsingPost400ApplicationJSON
	SendClientsMessageUsingPOST401ApplicationJSONObject *SendClientsMessageUsingPost401ApplicationJSON
	SendClientsMessageUsingPOST500ApplicationJSONObject *SendClientsMessageUsingPost500ApplicationJSON
}
