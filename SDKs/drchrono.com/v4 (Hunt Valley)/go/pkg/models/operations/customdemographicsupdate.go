package operations

import (
	"openapi/pkg/models/shared"
)

type CustomDemographicsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomDemographicsUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomDemographicsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomDemographicsUpdateRequest struct {
	PathParams  CustomDemographicsUpdatePathParams
	QueryParams CustomDemographicsUpdateQueryParams
	Security    CustomDemographicsUpdateSecurity
}

type CustomDemographicsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
