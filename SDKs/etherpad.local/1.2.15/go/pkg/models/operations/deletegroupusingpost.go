package operations

type DeleteGroupUsingPostQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
}

type DeleteGroupUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type DeleteGroupUsingPostRequest struct {
	QueryParams DeleteGroupUsingPostQueryParams
}

type DeleteGroupUsingPostResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	DeleteGroupUsingPOST200ApplicationJSONObject *DeleteGroupUsingPost200ApplicationJSON
	DeleteGroupUsingPOST400ApplicationJSONObject *DeleteGroupUsingPost400ApplicationJSON
	DeleteGroupUsingPOST401ApplicationJSONObject *DeleteGroupUsingPost401ApplicationJSON
	DeleteGroupUsingPOST500ApplicationJSONObject *DeleteGroupUsingPost500ApplicationJSON
}
