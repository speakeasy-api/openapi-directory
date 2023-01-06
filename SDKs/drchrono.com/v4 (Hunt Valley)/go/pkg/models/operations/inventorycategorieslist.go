package operations

import (
	"openapi/pkg/models/shared"
)

type InventoryCategoriesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
}

type InventoryCategoriesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// InventoryCategoriesList200ApplicationJSON
// Paginated Result
type InventoryCategoriesList200ApplicationJSON struct {
	Data     []shared.InventoryCategory `json:"data,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
}

type InventoryCategoriesListRequest struct {
	QueryParams InventoryCategoriesListQueryParams
	Security    InventoryCategoriesListSecurity
}

type InventoryCategoriesListResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	InventoryCategoriesList200ApplicationJSONObject *InventoryCategoriesList200ApplicationJSON
}
