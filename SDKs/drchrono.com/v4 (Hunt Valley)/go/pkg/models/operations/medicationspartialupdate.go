package operations

import (
	"openapi/pkg/models/shared"
)

type MedicationsPartialUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MedicationsPartialUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type MedicationsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type MedicationsPartialUpdateRequest struct {
	PathParams  MedicationsPartialUpdatePathParams
	QueryParams MedicationsPartialUpdateQueryParams
	Security    MedicationsPartialUpdateSecurity
}

type MedicationsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
