package operations

type DeleteSessionUsingPostQueryParams struct {
	SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
}

type DeleteSessionUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteSessionUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteSessionUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteSessionUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteSessionUsingPostRequest struct {
	QueryParams DeleteSessionUsingPostQueryParams
}

type DeleteSessionUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DeleteSessionUsingPOST200ApplicationJSONObject *DeleteSessionUsingPost200ApplicationJSON
	DeleteSessionUsingPOST400ApplicationJSONObject *DeleteSessionUsingPost400ApplicationJSON
	DeleteSessionUsingPOST401ApplicationJSONObject *DeleteSessionUsingPost401ApplicationJSON
	DeleteSessionUsingPOST500ApplicationJSONObject *DeleteSessionUsingPost500ApplicationJSON
}
