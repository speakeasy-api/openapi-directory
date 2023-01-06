package operations

type ListPadsUsingGetQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type ListPadsUsingGet200ApplicationJSONData struct {
	PadIDs []string `json:"padIDs,omitempty"`
}

type ListPadsUsingGet200ApplicationJSON struct {
	Code    *int64                                  `json:"code,omitempty"`
	Data    *ListPadsUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                 `json:"message,omitempty"`
}

type ListPadsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type ListPadsUsingGetRequest struct {
	QueryParams ListPadsUsingGetQueryParams
}

type ListPadsUsingGetResponse struct {
	ContentType                              string
	StatusCode                               int64
	ListPadsUsingGET200ApplicationJSONObject *ListPadsUsingGet200ApplicationJSON
	ListPadsUsingGET400ApplicationJSONObject *ListPadsUsingGet400ApplicationJSON
	ListPadsUsingGET401ApplicationJSONObject *ListPadsUsingGet401ApplicationJSON
	ListPadsUsingGET500ApplicationJSONObject *ListPadsUsingGet500ApplicationJSON
}
