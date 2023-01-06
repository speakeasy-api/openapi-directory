package operations

type GetStatsUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetStatsUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetStatsUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetStatsUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GetStatsUsingPostResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetStatsUsingPOST200ApplicationJSONObject *GetStatsUsingPost200ApplicationJSON
	GetStatsUsingPOST400ApplicationJSONObject *GetStatsUsingPost400ApplicationJSON
	GetStatsUsingPOST401ApplicationJSONObject *GetStatsUsingPost401ApplicationJSON
	GetStatsUsingPOST500ApplicationJSONObject *GetStatsUsingPost500ApplicationJSON
}
