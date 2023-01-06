package operations

import (
	"openapi/pkg/models/shared"
)

type CustomDemographicsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CustomDemographicsPartialUpdateQueryParams struct {
	Doctor *int64 `queryParam:"style=form,explode=true,name=doctor"`
}

type CustomDemographicsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type CustomDemographicsPartialUpdateRequest struct {
	PathParams  CustomDemographicsPartialUpdatePathParams
	QueryParams CustomDemographicsPartialUpdateQueryParams
	Security    CustomDemographicsPartialUpdateSecurity
}

type CustomDemographicsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
