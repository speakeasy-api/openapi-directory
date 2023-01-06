package operations

type CreateGroupPadUsingGetQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
	PadName *string `queryParam:"style=form,explode=true,name=padName"`
	Text    *string `queryParam:"style=form,explode=true,name=text"`
}

type CreateGroupPadUsingGet200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingGetRequest struct {
	QueryParams CreateGroupPadUsingGetQueryParams
}

type CreateGroupPadUsingGetResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	CreateGroupPadUsingGET200ApplicationJSONObject *CreateGroupPadUsingGet200ApplicationJSON
	CreateGroupPadUsingGET400ApplicationJSONObject *CreateGroupPadUsingGet400ApplicationJSON
	CreateGroupPadUsingGET401ApplicationJSONObject *CreateGroupPadUsingGet401ApplicationJSON
	CreateGroupPadUsingGET500ApplicationJSONObject *CreateGroupPadUsingGet500ApplicationJSON
}
