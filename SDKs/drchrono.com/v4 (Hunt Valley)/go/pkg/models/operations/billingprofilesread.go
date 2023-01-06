package operations

import (
	"openapi/pkg/models/shared"
)

type BillingProfilesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type BillingProfilesReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type BillingProfilesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type BillingProfilesReadRequest struct {
	PathParams  BillingProfilesReadPathParams
	QueryParams BillingProfilesReadQueryParams
	Security    BillingProfilesReadSecurity
}

type BillingProfilesReadResponse struct {
	BillingProfile *shared.BillingProfile
	ContentType    string
	StatusCode     int64
}
