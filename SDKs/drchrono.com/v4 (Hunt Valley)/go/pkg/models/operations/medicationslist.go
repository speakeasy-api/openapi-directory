// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type MedicationsListSecurity struct {
	DrchronoOauth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type MedicationsListRequest struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
}

// MedicationsList200ApplicationJSON - Paginated Result
type MedicationsList200ApplicationJSON struct {
	// result data
	Data []shared.PatientDrug `json:"data,omitempty"`
	// Next Paginated page
	Next *string `json:"next,omitempty"`
	// Previous paginated page
	Previous *string `json:"previous,omitempty"`
}

type MedicationsListResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	MedicationsList200ApplicationJSONObject *MedicationsList200ApplicationJSON
}
