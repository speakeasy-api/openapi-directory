package operations

import (
	"openapi/pkg/models/shared"
)

type MedicationsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type MedicationsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// MedicationsList200ApplicationJSON
// Paginated Result
type MedicationsList200ApplicationJSON struct {
	Data     []shared.PatientDrug `json:"data,omitempty"`
	Next     *string              `json:"next,omitempty"`
	Previous *string              `json:"previous,omitempty"`
}

type MedicationsListRequest struct {
	QueryParams MedicationsListQueryParams
	Security    MedicationsListSecurity
}

type MedicationsListResponse struct {
	ContentType                             string
	StatusCode                              int64
	MedicationsList200ApplicationJSONObject *MedicationsList200ApplicationJSON
}
