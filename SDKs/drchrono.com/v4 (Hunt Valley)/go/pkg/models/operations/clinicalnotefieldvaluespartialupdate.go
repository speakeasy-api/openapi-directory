package operations

import (
	"openapi/pkg/models/shared"
)

type ClinicalNoteFieldValuesPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ClinicalNoteFieldValuesPartialUpdateQueryParams struct {
	Appointment          *int64  `queryParam:"style=form,explode=true,name=appointment"`
	ClinicalNoteField    *int64  `queryParam:"style=form,explode=true,name=clinical_note_field"`
	ClinicalNoteTemplate *int64  `queryParam:"style=form,explode=true,name=clinical_note_template"`
	Doctor               *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since                *string `queryParam:"style=form,explode=true,name=since"`
}

type ClinicalNoteFieldValuesPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClinicalNoteFieldValuesPartialUpdateRequest struct {
	PathParams  ClinicalNoteFieldValuesPartialUpdatePathParams
	QueryParams ClinicalNoteFieldValuesPartialUpdateQueryParams
	Security    ClinicalNoteFieldValuesPartialUpdateSecurity
}

type ClinicalNoteFieldValuesPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
