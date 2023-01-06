package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentsListQueryParams struct {
	Cursor    *string `queryParam:"style=form,explode=true,name=cursor"`
	Date      *string `queryParam:"style=form,explode=true,name=date"`
	DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
	Doctor    *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office    *int64  `queryParam:"style=form,explode=true,name=office"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient   *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since     *string `queryParam:"style=form,explode=true,name=since"`
	Status    *string `queryParam:"style=form,explode=true,name=status"`
}

type AppointmentsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// AppointmentsList200ApplicationJSON
// Paginated Result
type AppointmentsList200ApplicationJSON struct {
	Data     []shared.Appointment `json:"data,omitempty"`
	Next     *string              `json:"next,omitempty"`
	Previous *string              `json:"previous,omitempty"`
}

type AppointmentsListRequest struct {
	QueryParams AppointmentsListQueryParams
	Security    AppointmentsListSecurity
}

type AppointmentsListResponse struct {
	ContentType                              string
	StatusCode                               int64
	AppointmentsList200ApplicationJSONObject *AppointmentsList200ApplicationJSON
}
