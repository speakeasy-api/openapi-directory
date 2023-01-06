package operations

import (
	"openapi/pkg/models/shared"
)

type InventoryCategoriesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InventoryCategoriesReadQueryParams struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type InventoryCategoriesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type InventoryCategoriesReadRequest struct {
	PathParams  InventoryCategoriesReadPathParams
	QueryParams InventoryCategoriesReadQueryParams
	Security    InventoryCategoriesReadSecurity
}

type InventoryCategoriesReadResponse struct {
	ContentType       string
	InventoryCategory *shared.InventoryCategory
	StatusCode        int64
}
