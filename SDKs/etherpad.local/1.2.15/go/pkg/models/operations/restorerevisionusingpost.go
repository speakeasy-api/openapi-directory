package operations

type RestoreRevisionUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type RestoreRevisionUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type RestoreRevisionUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type RestoreRevisionUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type RestoreRevisionUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type RestoreRevisionUsingPostRequest struct {
	QueryParams RestoreRevisionUsingPostQueryParams
}

type RestoreRevisionUsingPostResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	RestoreRevisionUsingPOST200ApplicationJSONObject *RestoreRevisionUsingPost200ApplicationJSON
	RestoreRevisionUsingPOST400ApplicationJSONObject *RestoreRevisionUsingPost400ApplicationJSON
	RestoreRevisionUsingPOST401ApplicationJSONObject *RestoreRevisionUsingPost401ApplicationJSON
	RestoreRevisionUsingPOST500ApplicationJSONObject *RestoreRevisionUsingPost500ApplicationJSON
}
