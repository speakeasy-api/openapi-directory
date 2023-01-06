package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteTemplatesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ClinicalNoteTemplatesReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ClinicalNoteTemplatesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClinicalNoteTemplatesReadRequest struct {
	PathParams  ClinicalNoteTemplatesReadPathParams
	QueryParams ClinicalNoteTemplatesReadQueryParams
	Security    ClinicalNoteTemplatesReadSecurity
}

type ClinicalNoteTemplatesReadResponse struct {
	ContentType          string
	SoapNoteCustomReport *shared.SoapNoteCustomReport
	StatusCode           int64
}
