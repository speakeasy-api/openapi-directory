package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteFieldValuesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ClinicalNoteFieldValuesUpdateQueryParams struct {
	Appointment          *int64  `queryParam:"style=form,explode=true,name=appointment"`
	ClinicalNoteField    *int64  `queryParam:"style=form,explode=true,name=clinical_note_field"`
	ClinicalNoteTemplate *int64  `queryParam:"style=form,explode=true,name=clinical_note_template"`
	Doctor               *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since                *string `queryParam:"style=form,explode=true,name=since"`
}

type ClinicalNoteFieldValuesUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClinicalNoteFieldValuesUpdateRequest struct {
	PathParams  ClinicalNoteFieldValuesUpdatePathParams
	QueryParams ClinicalNoteFieldValuesUpdateQueryParams
	Security    ClinicalNoteFieldValuesUpdateSecurity
}

type ClinicalNoteFieldValuesUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
