package operations

type SetPublicStatusUsingGetQueryParams struct {
	PadID        *string `queryParam:"style=form,explode=true,name=padID"`
	PublicStatus *string `queryParam:"style=form,explode=true,name=publicStatus"`
}

type SetPublicStatusUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetPublicStatusUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetPublicStatusUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetPublicStatusUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetPublicStatusUsingGetRequest struct {
	QueryParams SetPublicStatusUsingGetQueryParams
}

type SetPublicStatusUsingGetResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	SetPublicStatusUsingGET200ApplicationJSONObject *SetPublicStatusUsingGet200ApplicationJSON
	SetPublicStatusUsingGET400ApplicationJSONObject *SetPublicStatusUsingGet400ApplicationJSON
	SetPublicStatusUsingGET401ApplicationJSONObject *SetPublicStatusUsingGet401ApplicationJSON
	SetPublicStatusUsingGET500ApplicationJSONObject *SetPublicStatusUsingGet500ApplicationJSON
}
