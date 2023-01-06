package operations

type GetChatHeadUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type GetChatHeadUsingPost200ApplicationJSONDataChatHead struct {
	Text     *string `json:"text,omitempty"`
	Time     *int64  `json:"time,omitempty"`
	UserID   *string `json:"userId,omitempty"`
	UserName *string `json:"userName,omitempty"`
}

type GetChatHeadUsingPost200ApplicationJSONData struct {
	ChatHead *GetChatHeadUsingPost200ApplicationJSONDataChatHead `json:"chatHead,omitempty"`
}

type GetChatHeadUsingPost200ApplicationJSON struct {
	Code    *int64                                      `json:"code,omitempty"`
	Data    *GetChatHeadUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                     `json:"message,omitempty"`
}

type GetChatHeadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetChatHeadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetChatHeadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetChatHeadUsingPostRequest struct {
	QueryParams GetChatHeadUsingPostQueryParams
}

type GetChatHeadUsingPostResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetChatHeadUsingPOST200ApplicationJSONObject *GetChatHeadUsingPost200ApplicationJSON
	GetChatHeadUsingPOST400ApplicationJSONObject *GetChatHeadUsingPost400ApplicationJSON
	GetChatHeadUsingPOST401ApplicationJSONObject *GetChatHeadUsingPost401ApplicationJSON
	GetChatHeadUsingPOST500ApplicationJSONObject *GetChatHeadUsingPost500ApplicationJSON
}
