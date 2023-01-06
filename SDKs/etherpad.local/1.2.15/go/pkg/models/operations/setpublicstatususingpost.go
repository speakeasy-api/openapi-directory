package operations

type SetPublicStatusUsingPostQueryParams struct {
	PadID        *string `queryParam:"style=form,explode=true,name=padID"`
	PublicStatus *string `queryParam:"style=form,explode=true,name=publicStatus"`
}

type SetPublicStatusUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetPublicStatusUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetPublicStatusUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetPublicStatusUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetPublicStatusUsingPostRequest struct {
	QueryParams SetPublicStatusUsingPostQueryParams
}

type SetPublicStatusUsingPostResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	SetPublicStatusUsingPOST200ApplicationJSONObject *SetPublicStatusUsingPost200ApplicationJSON
	SetPublicStatusUsingPOST400ApplicationJSONObject *SetPublicStatusUsingPost400ApplicationJSON
	SetPublicStatusUsingPOST401ApplicationJSONObject *SetPublicStatusUsingPost401ApplicationJSON
	SetPublicStatusUsingPOST500ApplicationJSONObject *SetPublicStatusUsingPost500ApplicationJSON
}
