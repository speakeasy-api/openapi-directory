// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type CreateGroupIfNotExistsForUsingGETRequest struct {
	GroupMapper *string `queryParam:"style=form,explode=true,name=groupMapper"`
}

// CreateGroupIfNotExistsForUsingGET500ApplicationJSON - internal api error (code 2)
type CreateGroupIfNotExistsForUsingGET500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

// CreateGroupIfNotExistsForUsingGET401ApplicationJSON - no or wrong API key (code 4)
type CreateGroupIfNotExistsForUsingGET401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

// CreateGroupIfNotExistsForUsingGET400ApplicationJSON - generic api error (code 1)
type CreateGroupIfNotExistsForUsingGET400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupIfNotExistsForUsingGET200ApplicationJSONData struct {
	GroupID *string `json:"groupID,omitempty"`
}

// CreateGroupIfNotExistsForUsingGET200ApplicationJSON - ok (code 0)
type CreateGroupIfNotExistsForUsingGET200ApplicationJSON struct {
	Code    *int64                                                   `json:"code,omitempty"`
	Data    *CreateGroupIfNotExistsForUsingGET200ApplicationJSONData `json:"data,omitempty"`
	Message *string                                                  `json:"message,omitempty"`
}

type CreateGroupIfNotExistsForUsingGETResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// ok (code 0)
	CreateGroupIfNotExistsForUsingGET200ApplicationJSONObject *CreateGroupIfNotExistsForUsingGET200ApplicationJSON
	// generic api error (code 1)
	CreateGroupIfNotExistsForUsingGET400ApplicationJSONObject *CreateGroupIfNotExistsForUsingGET400ApplicationJSON
	// no or wrong API key (code 4)
	CreateGroupIfNotExistsForUsingGET401ApplicationJSONObject *CreateGroupIfNotExistsForUsingGET401ApplicationJSON
	// internal api error (code 2)
	CreateGroupIfNotExistsForUsingGET500ApplicationJSONObject *CreateGroupIfNotExistsForUsingGET500ApplicationJSON
}
