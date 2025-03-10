// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GETSavedRevisionsCountUsingGETRequest struct {
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

// GETSavedRevisionsCountUsingGET500ApplicationJSON - internal api error (code 2)
type GETSavedRevisionsCountUsingGET500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

// GETSavedRevisionsCountUsingGET401ApplicationJSON - no or wrong API key (code 4)
type GETSavedRevisionsCountUsingGET401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

// GETSavedRevisionsCountUsingGET400ApplicationJSON - generic api error (code 1)
type GETSavedRevisionsCountUsingGET400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

// GETSavedRevisionsCountUsingGET200ApplicationJSON - ok (code 0)
type GETSavedRevisionsCountUsingGET200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type GETSavedRevisionsCountUsingGETResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// ok (code 0)
	GETSavedRevisionsCountUsingGET200ApplicationJSONObject *GETSavedRevisionsCountUsingGET200ApplicationJSON
	// generic api error (code 1)
	GETSavedRevisionsCountUsingGET400ApplicationJSONObject *GETSavedRevisionsCountUsingGET400ApplicationJSON
	// no or wrong API key (code 4)
	GETSavedRevisionsCountUsingGET401ApplicationJSONObject *GETSavedRevisionsCountUsingGET401ApplicationJSON
	// internal api error (code 2)
	GETSavedRevisionsCountUsingGET500ApplicationJSONObject *GETSavedRevisionsCountUsingGET500ApplicationJSON
}
