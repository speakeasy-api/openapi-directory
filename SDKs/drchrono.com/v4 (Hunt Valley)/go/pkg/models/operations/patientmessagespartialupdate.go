package operations

import (
	"openapi/pkg/models/shared"
)

type PatientMessagesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatientMessagesPartialUpdateQueryParams struct {
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type PatientMessagesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type PatientMessagesPartialUpdateRequest struct {
	PathParams  PatientMessagesPartialUpdatePathParams
	QueryParams PatientMessagesPartialUpdateQueryParams
	Security    PatientMessagesPartialUpdateSecurity
}

type PatientMessagesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
