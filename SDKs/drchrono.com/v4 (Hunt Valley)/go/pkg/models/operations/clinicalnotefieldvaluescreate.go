package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteFieldValuesCreateQueryParams struct {
	Appointment          *int64  `queryParam:"style=form,explode=true,name=appointment"`
	ClinicalNoteField    *int64  `queryParam:"style=form,explode=true,name=clinical_note_field"`
	ClinicalNoteTemplate *int64  `queryParam:"style=form,explode=true,name=clinical_note_template"`
	Doctor               *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since                *string `queryParam:"style=form,explode=true,name=since"`
}

type ClinicalNoteFieldValuesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClinicalNoteFieldValuesCreateRequest struct {
	QueryParams ClinicalNoteFieldValuesCreateQueryParams
	Security    ClinicalNoteFieldValuesCreateSecurity
}

type ClinicalNoteFieldValuesCreateResponse struct {
	ContentType                string
	SoapNoteLineItemFieldValue *shared.SoapNoteLineItemFieldValue
	StatusCode                 int64
}
