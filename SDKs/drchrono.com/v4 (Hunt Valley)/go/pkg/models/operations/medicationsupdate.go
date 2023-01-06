package operations

import (
	"openapi/pkg/models/shared"
)

type MedicationsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MedicationsUpdateQueryParams struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type MedicationsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type MedicationsUpdateRequest struct {
	PathParams  MedicationsUpdatePathParams
	QueryParams MedicationsUpdateQueryParams
	Security    MedicationsUpdateSecurity
}

type MedicationsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
