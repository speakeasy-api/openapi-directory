package operations

import (
	"openapi/pkg/models/shared"
)

type CustomDemographicsCreateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomDemographicsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomDemographicsCreateRequest struct {
	QueryParams CustomDemographicsCreateQueryParams
	Security    CustomDemographicsCreateSecurity
}

type CustomDemographicsCreateResponse struct {
	ContentType            string
	CustomPatientFieldType *shared.CustomPatientFieldType
	StatusCode             int64
}
