package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteFieldValuesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ClinicalNoteFieldValuesReadQueryParams struct {
	Appointment          *int64  `queryParam:"style=form,explode=true,name=appointment"`
	ClinicalNoteField    *int64  `queryParam:"style=form,explode=true,name=clinical_note_field"`
	ClinicalNoteTemplate *int64  `queryParam:"style=form,explode=true,name=clinical_note_template"`
	Doctor               *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since                *string `queryParam:"style=form,explode=true,name=since"`
}

type ClinicalNoteFieldValuesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClinicalNoteFieldValuesReadRequest struct {
	PathParams  ClinicalNoteFieldValuesReadPathParams
	QueryParams ClinicalNoteFieldValuesReadQueryParams
	Security    ClinicalNoteFieldValuesReadSecurity
}

type ClinicalNoteFieldValuesReadResponse struct {
	ContentType                string
	SoapNoteLineItemFieldValue *shared.SoapNoteLineItemFieldValue
	StatusCode                 int64
}
