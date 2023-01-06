package operations

type PadUsersCountUsingGetQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type PadUsersCountUsingGet200ApplicationJSONData struct {
	PadUsersCount *int64 `json:"padUsersCount,omitempty"`
}

type PadUsersCountUsingGet200ApplicationJSON struct {
	Code    *int64                                       `json:"code,omitempty"`
	Data    *PadUsersCountUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                      `json:"message,omitempty"`
}

type PadUsersCountUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingGetRequest struct {
	QueryParams PadUsersCountUsingGetQueryParams
}

type PadUsersCountUsingGetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	PadUsersCountUsingGET200ApplicationJSONObject *PadUsersCountUsingGet200ApplicationJSON
	PadUsersCountUsingGET400ApplicationJSONObject *PadUsersCountUsingGet400ApplicationJSON
	PadUsersCountUsingGET401ApplicationJSONObject *PadUsersCountUsingGet401ApplicationJSON
	PadUsersCountUsingGET500ApplicationJSONObject *PadUsersCountUsingGet500ApplicationJSON
}
