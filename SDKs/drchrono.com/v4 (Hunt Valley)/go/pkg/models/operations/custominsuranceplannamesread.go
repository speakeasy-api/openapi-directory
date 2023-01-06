package operations

import (
	"openapi/pkg/models/shared"
)

type CustomInsurancePlanNamesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomInsurancePlanNamesReadQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
	User   *int64  `queryParam:"style=form,explode=true,name=user"`
}

type CustomInsurancePlanNamesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomInsurancePlanNamesReadRequest struct {
	PathParams  CustomInsurancePlanNamesReadPathParams
	QueryParams CustomInsurancePlanNamesReadQueryParams
	Security    CustomInsurancePlanNamesReadSecurity
}

type CustomInsurancePlanNamesReadResponse struct {
	ContentType             string
	CustomInsurancePlanName *shared.CustomInsurancePlanName
	StatusCode              int64
}
