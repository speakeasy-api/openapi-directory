package operations

import (
	"openapi/pkg/models/shared"
)

type CustomDemographicsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomDemographicsReadQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomDemographicsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomDemographicsReadRequest struct {
	PathParams  CustomDemographicsReadPathParams
	QueryParams CustomDemographicsReadQueryParams
	Security    CustomDemographicsReadSecurity
}

type CustomDemographicsReadResponse struct {
	ContentType            string
	CustomPatientFieldType *shared.CustomPatientFieldType
	StatusCode             int64
}
