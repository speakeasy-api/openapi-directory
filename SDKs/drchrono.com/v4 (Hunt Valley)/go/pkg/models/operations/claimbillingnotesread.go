package operations

import (
	"openapi/pkg/models/shared"
)

type ClaimBillingNotesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ClaimBillingNotesReadQueryParams struct {
	Appointment *int64 `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ClaimBillingNotesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClaimBillingNotesReadRequest struct {
	PathParams  ClaimBillingNotesReadPathParams
	QueryParams ClaimBillingNotesReadQueryParams
	Security    ClaimBillingNotesReadSecurity
}

type ClaimBillingNotesReadResponse struct {
	ClaimBillingNotes *shared.ClaimBillingNotes
	ContentType       string
	StatusCode        int64
}
