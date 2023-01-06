package operations

import (
	"openapi/pkg/models/shared"
)

type InventoryVaccinesCreateQueryParams struct {
	CvxCode *string `queryParam:"style=form,explode=true,name=cvx_code"`
	Doctor  *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
	Status  *string `queryParam:"style=form,explode=true,name=status"`
}

type InventoryVaccinesCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type InventoryVaccinesCreateRequest struct {
	QueryParams InventoryVaccinesCreateQueryParams
	Security    InventoryVaccinesCreateSecurity
}

type InventoryVaccinesCreateResponse struct {
	ContentType      string
	InventoryVaccine *shared.InventoryVaccine
	StatusCode       int64
}
