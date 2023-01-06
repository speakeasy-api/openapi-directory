package operations

type AppendChatMessageUsingGetQueryParams struct {
	AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
	PadID    *string `queryParam:"style=form,explode=true,name=padID"`
	Text     *string `queryParam:"style=form,explode=true,name=text"`
	Time     *string `queryParam:"style=form,explode=true,name=time"`
}

type AppendChatMessageUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendChatMessageUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendChatMessageUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendChatMessageUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type AppendChatMessageUsingGetRequest struct {
	QueryParams AppendChatMessageUsingGetQueryParams
}

type AppendChatMessageUsingGetResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	AppendChatMessageUsingGET200ApplicationJSONObject *AppendChatMessageUsingGet200ApplicationJSON
	AppendChatMessageUsingGET400ApplicationJSONObject *AppendChatMessageUsingGet400ApplicationJSON
	AppendChatMessageUsingGET401ApplicationJSONObject *AppendChatMessageUsingGet401ApplicationJSON
	AppendChatMessageUsingGET500ApplicationJSONObject *AppendChatMessageUsingGet500ApplicationJSON
}
