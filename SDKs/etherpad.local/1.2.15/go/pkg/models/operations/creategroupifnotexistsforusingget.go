package operations

type CreateGroupIfNotExistsForUsingGetQueryParams struct {
	GroupMapper *string `queryParam:"style=form,explode=true,name=groupMapper"`
}

type CreateGroupIfNotExistsForUsingGet200ApplicationJSONData struct {
	GroupID *string `json:"groupID,omitempty"`
}

type CreateGroupIfNotExistsForUsingGet200ApplicationJSON struct {
	Code    *int64                                                   `json:"code,omitempty"`
	Data    *CreateGroupIfNotExistsForUsingGet200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                                  `json:"message,omitempty"`
}

type CreateGroupIfNotExistsForUsingGet400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupIfNotExistsForUsingGet401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupIfNotExistsForUsingGet500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupIfNotExistsForUsingGetRequest struct {
	QueryParams CreateGroupIfNotExistsForUsingGetQueryParams
}

type CreateGroupIfNotExistsForUsingGetResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	CreateGroupIfNotExistsForUsingGET200ApplicationJSONObject *CreateGroupIfNotExistsForUsingGet200ApplicationJSON
	CreateGroupIfNotExistsForUsingGET400ApplicationJSONObject *CreateGroupIfNotExistsForUsingGet400ApplicationJSON
	CreateGroupIfNotExistsForUsingGET401ApplicationJSONObject *CreateGroupIfNotExistsForUsingGet401ApplicationJSON
	CreateGroupIfNotExistsForUsingGET500ApplicationJSONObject *CreateGroupIfNotExistsForUsingGet500ApplicationJSON
}
