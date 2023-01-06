package operations

import (
	"openapi/pkg/models/shared"
)

type CustomVitalsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomVitalsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomVitalsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomVitalsReadRequest struct {
	PathParams  CustomVitalsReadPathParams
	QueryParams CustomVitalsReadQueryParams
	Security    CustomVitalsReadSecurity
}

type CustomVitalsReadResponse struct {
	ContentType     string
	CustomVitalType *shared.CustomVitalType
	StatusCode      int64
}
