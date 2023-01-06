package operations

import (
	"openapi/pkg/models/shared"
)

type EligibilityChecksListQueryParams struct {
	Appointment          *int64  `queryParam:"style=form,explode=true,name=appointment"`
	AppointmentDate      *string `queryParam:"style=form,explode=true,name=appointment_date"`
	AppointmentDateRange *string `queryParam:"style=form,explode=true,name=appointment_date_range"`
	Cursor               *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor               *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize             *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient              *int64  `queryParam:"style=form,explode=true,name=patient"`
	QueryDate            *string `queryParam:"style=form,explode=true,name=query_date"`
	QueryDateRange       *string `queryParam:"style=form,explode=true,name=query_date_range"`
}

type EligibilityChecksListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// EligibilityChecksList200ApplicationJSON
// Paginated Result
type EligibilityChecksList200ApplicationJSON struct {
	Data     []shared.Coverage `json:"data,omitempty"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
}

type EligibilityChecksListRequest struct {
	QueryParams EligibilityChecksListQueryParams
	Security    EligibilityChecksListSecurity
}

type EligibilityChecksListResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	EligibilityChecksList200ApplicationJSONObject *EligibilityChecksList200ApplicationJSON
}
