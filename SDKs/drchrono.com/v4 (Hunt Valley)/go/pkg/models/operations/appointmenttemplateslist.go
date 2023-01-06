package operations

import (
	"openapi/pkg/models/shared"
)

type AppointmentTemplatesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office   *int64  `queryParam:"style=form,explode=true,name=office"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Profile  *int64  `queryParam:"style=form,explode=true,name=profile"`
}

type AppointmentTemplatesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// AppointmentTemplatesList200ApplicationJSON
// Paginated Result
type AppointmentTemplatesList200ApplicationJSON struct {
	Data     []shared.AppointmentTemplate `json:"data,omitempty"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
}

type AppointmentTemplatesListRequest struct {
	QueryParams AppointmentTemplatesListQueryParams
	Security    AppointmentTemplatesListSecurity
}

type AppointmentTemplatesListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	AppointmentTemplatesList200ApplicationJSONObject *AppointmentTemplatesList200ApplicationJSON
}
