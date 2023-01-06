package operations

import (
	"openapi/pkg/models/shared"
)

type MedicationsAppendToPharmacyNotePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MedicationsAppendToPharmacyNoteQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type MedicationsAppendToPharmacyNoteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type MedicationsAppendToPharmacyNoteRequest struct {
	PathParams  MedicationsAppendToPharmacyNotePathParams
	QueryParams MedicationsAppendToPharmacyNoteQueryParams
	Security    MedicationsAppendToPharmacyNoteSecurity
}

type MedicationsAppendToPharmacyNoteResponse struct {
	ContentType string
	StatusCode  int64
}
