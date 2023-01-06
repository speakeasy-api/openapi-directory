package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNotesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ClinicalNotesReadQueryParams struct {
	Date      *string `queryParam:"style=form,explode=true,name=date"`
	DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
	Doctor    *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Office    *int64  `queryParam:"style=form,explode=true,name=office"`
	Patient   *int64  `queryParam:"style=form,explode=true,name=patient"`
	Since     *string `queryParam:"style=form,explode=true,name=since"`
}

type ClinicalNotesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClinicalNotesReadRequest struct {
	PathParams  ClinicalNotesReadPathParams
	QueryParams ClinicalNotesReadQueryParams
	Security    ClinicalNotesReadSecurity
}

type ClinicalNotesReadResponse struct {
	ClinicalNote *shared.ClinicalNote
	ContentType  string
	StatusCode   int64
}
