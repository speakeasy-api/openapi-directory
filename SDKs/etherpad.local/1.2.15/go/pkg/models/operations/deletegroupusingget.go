package operations

type DeleteGroupUsingGetQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type DeleteGroupUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingGetRequest struct {
	QueryParams DeleteGroupUsingGetQueryParams
}

type DeleteGroupUsingGetResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	DeleteGroupUsingGET200ApplicationJSONObject *DeleteGroupUsingGet200ApplicationJSON
	DeleteGroupUsingGET400ApplicationJSONObject *DeleteGroupUsingGet400ApplicationJSON
	DeleteGroupUsingGET401ApplicationJSONObject *DeleteGroupUsingGet401ApplicationJSON
	DeleteGroupUsingGET500ApplicationJSONObject *DeleteGroupUsingGet500ApplicationJSON
}
