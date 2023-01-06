package operations

type CreatePadUsingPostQueryParams struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
	Text  *string `queryParam:"style=form,explode=true,name=text"`
}

type CreatePadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreatePadUsingPostRequest struct {
	QueryParams CreatePadUsingPostQueryParams
}

type CreatePadUsingPostResponse struct {
	ContentType                                string
	StatusCode                                 int64
	CreatePadUsingPOST200ApplicationJSONObject *CreatePadUsingPost200ApplicationJSON
	CreatePadUsingPOST400ApplicationJSONObject *CreatePadUsingPost400ApplicationJSON
	CreatePadUsingPOST401ApplicationJSONObject *CreatePadUsingPost401ApplicationJSON
	CreatePadUsingPOST500ApplicationJSONObject *CreatePadUsingPost500ApplicationJSON
}
