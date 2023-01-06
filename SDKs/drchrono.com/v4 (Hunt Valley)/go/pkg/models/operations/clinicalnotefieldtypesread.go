package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteFieldTypesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ClinicalNoteFieldTypesReadQueryParams struct {
	ClinicalNoteTemplate *int64 `queryParam:"style=form,explode=true,name=clinical_note_template"`
	Doctor               *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ClinicalNoteFieldTypesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClinicalNoteFieldTypesReadRequest struct {
	PathParams  ClinicalNoteFieldTypesReadPathParams
	QueryParams ClinicalNoteFieldTypesReadQueryParams
	Security    ClinicalNoteFieldTypesReadSecurity
}

type ClinicalNoteFieldTypesReadResponse struct {
	ContentType               string
	SoapNoteLineItemFieldType *shared.SoapNoteLineItemFieldType
	StatusCode                int64
}
