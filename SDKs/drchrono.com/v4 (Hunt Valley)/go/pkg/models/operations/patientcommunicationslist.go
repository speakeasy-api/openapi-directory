package operations

import (
	"openapi/pkg/models/shared"
)

type PatientCommunicationsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient  *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type PatientCommunicationsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// PatientCommunicationsList200ApplicationJSON
// Paginated Result
type PatientCommunicationsList200ApplicationJSON struct {
	Data     []shared.PatientCommunication `json:"data,omitempty"`
	Next     *string                       `json:"next,omitempty"`
	Previous *string                       `json:"previous,omitempty"`
}

type PatientCommunicationsListRequest struct {
	QueryParams PatientCommunicationsListQueryParams
	Security    PatientCommunicationsListSecurity
}

type PatientCommunicationsListResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PatientCommunicationsList200ApplicationJSONObject *PatientCommunicationsList200ApplicationJSON
}
