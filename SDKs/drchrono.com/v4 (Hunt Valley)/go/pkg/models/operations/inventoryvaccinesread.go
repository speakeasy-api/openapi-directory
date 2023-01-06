package operations

import (
	"openapi/pkg/models/shared"
)

type InventoryVaccinesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InventoryVaccinesReadQueryParams struct {
	CvxCode *string `queryParam:"style=form,explode=true,name=cvx_code"`
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
	Status  *string `queryParam:"style=form,explode=true,name=status"`
}

type InventoryVaccinesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type InventoryVaccinesReadRequest struct {
	PathParams  InventoryVaccinesReadPathParams
	QueryParams InventoryVaccinesReadQueryParams
	Security    InventoryVaccinesReadSecurity
}

type InventoryVaccinesReadResponse struct {
	ContentType      string
	InventoryVaccine *shared.InventoryVaccine
	StatusCode       int64
}
