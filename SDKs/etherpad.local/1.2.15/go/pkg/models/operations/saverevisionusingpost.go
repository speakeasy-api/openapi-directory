package operations

type SaveRevisionUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Rev   *string `queryParam:"style=form,explode=true,name=rev"`
}

type SaveRevisionUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SaveRevisionUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SaveRevisionUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SaveRevisionUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SaveRevisionUsingPostRequest struct {
	QueryParams SaveRevisionUsingPostQueryParams
}

type SaveRevisionUsingPostResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	SaveRevisionUsingPOST200ApplicationJSONObject *SaveRevisionUsingPost200ApplicationJSON
	SaveRevisionUsingPOST400ApplicationJSONObject *SaveRevisionUsingPost400ApplicationJSON
	SaveRevisionUsingPOST401ApplicationJSONObject *SaveRevisionUsingPost401ApplicationJSON
	SaveRevisionUsingPOST500ApplicationJSONObject *SaveRevisionUsingPost500ApplicationJSON
}
