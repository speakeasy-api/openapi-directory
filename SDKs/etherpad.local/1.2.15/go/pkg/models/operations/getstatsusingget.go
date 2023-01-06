package operations

type GetStatsUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetStatsUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetStatsUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetStatsUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetStatsUsingGetResponse struct {
	ContentType                              string
	StatusCode                               int64
	GETStatsUsingGET200ApplicationJSONObject *GetStatsUsingGet200ApplicationJSON
	GETStatsUsingGET400ApplicationJSONObject *GetStatsUsingGet400ApplicationJSON
	GETStatsUsingGET401ApplicationJSONObject *GetStatsUsingGet401ApplicationJSON
	GETStatsUsingGET500ApplicationJSONObject *GetStatsUsingGet500ApplicationJSON
}
