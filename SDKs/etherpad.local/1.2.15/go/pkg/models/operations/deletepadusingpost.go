package operations

type DeletePadUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type DeletePadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeletePadUsingPostRequest struct {
	QueryParams DeletePadUsingPostQueryParams
}

type DeletePadUsingPostResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DeletePadUsingPOST200ApplicationJSONObject *DeletePadUsingPost200ApplicationJSON
	DeletePadUsingPOST400ApplicationJSONObject *DeletePadUsingPost400ApplicationJSON
	DeletePadUsingPOST401ApplicationJSONObject *DeletePadUsingPost401ApplicationJSON
	DeletePadUsingPOST500ApplicationJSONObject *DeletePadUsingPost500ApplicationJSON
}
