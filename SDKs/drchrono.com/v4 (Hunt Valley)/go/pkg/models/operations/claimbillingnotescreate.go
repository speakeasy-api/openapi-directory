package operations

import (
	"openapi/pkg/models/shared"
)

type ClaimBillingNotesCreateQueryParams struct {
	Appointment *int64 `queryParam:"style=form,explode=true,name=appointment"`
	Doctor      *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type ClaimBillingNotesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ClaimBillingNotesCreateRequest struct {
	QueryParams ClaimBillingNotesCreateQueryParams
	Security    ClaimBillingNotesCreateSecurity
}

type ClaimBillingNotesCreateResponse struct {
	ClaimBillingNotes *shared.ClaimBillingNotes
	ContentType       string
	StatusCode        int64
}
