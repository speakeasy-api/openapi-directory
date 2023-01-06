package operations

import (
	"openapi/pkg/models/shared"
)

type InventoryVaccinesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	CvxCode  *string `queryParam:"style=form,explode=true,name=cvx_code"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Since    *string `queryParam:"style=form,explode=true,name=since"`
	Status   *string `queryParam:"style=form,explode=true,name=status"`
}

type InventoryVaccinesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// InventoryVaccinesList200ApplicationJSON
// Paginated Result
type InventoryVaccinesList200ApplicationJSON struct {
	Data     []shared.InventoryVaccine `json:"data,omitempty"`
	Next     *string                   `json:"next,omitempty"`
	Previous *string                   `json:"previous,omitempty"`
}

type InventoryVaccinesListRequest struct {
	QueryParams InventoryVaccinesListQueryParams
	Security    InventoryVaccinesListSecurity
}

type InventoryVaccinesListResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	InventoryVaccinesList200ApplicationJSONObject *InventoryVaccinesList200ApplicationJSON
}
