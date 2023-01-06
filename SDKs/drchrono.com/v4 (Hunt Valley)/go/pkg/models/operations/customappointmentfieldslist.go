package operations

import (
	"openapi/pkg/models/shared"
)

type CustomAppointmentFieldsListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type CustomAppointmentFieldsListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// CustomAppointmentFieldsList200ApplicationJSON
// Paginated Result
type CustomAppointmentFieldsList200ApplicationJSON struct {
	Data     []shared.CustomAppointmentFieldType `json:"data,omitempty"`
	Next     *string                             `json:"next,omitempty"`
	Previous *string                             `json:"previous,omitempty"`
}

type CustomAppointmentFieldsListRequest struct {
	QueryParams CustomAppointmentFieldsListQueryParams
	Security    CustomAppointmentFieldsListSecurity
}

type CustomAppointmentFieldsListResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	CustomAppointmentFieldsList200ApplicationJSONObject *CustomAppointmentFieldsList200ApplicationJSON
}
