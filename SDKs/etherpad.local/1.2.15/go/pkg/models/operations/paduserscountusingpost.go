package operations

type PadUsersCountUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type PadUsersCountUsingPost200ApplicationJSONData struct {
	PadUsersCount *int64 `json:"padUsersCount,omitempty"`
}

type PadUsersCountUsingPost200ApplicationJSON struct {
	Code    *int64                                        `json:"code,omitempty"`
	Data    *PadUsersCountUsingPost200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                       `json:"message,omitempty"`
}

type PadUsersCountUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type PadUsersCountUsingPostRequest struct {
	QueryParams PadUsersCountUsingPostQueryParams
}

type PadUsersCountUsingPostResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	PadUsersCountUsingPOST200ApplicationJSONObject *PadUsersCountUsingPost200ApplicationJSON
	PadUsersCountUsingPOST400ApplicationJSONObject *PadUsersCountUsingPost400ApplicationJSON
	PadUsersCountUsingPOST401ApplicationJSONObject *PadUsersCountUsingPost401ApplicationJSON
	PadUsersCountUsingPOST500ApplicationJSONObject *PadUsersCountUsingPost500ApplicationJSON
}
