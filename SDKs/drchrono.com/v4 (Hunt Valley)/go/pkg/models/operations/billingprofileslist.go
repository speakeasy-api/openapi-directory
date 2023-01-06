package operations

import (
	"openapi/pkg/models/shared"
)

type BillingProfilesListQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor   *int64  `queryParam:"style=form,explode=true,name=doctor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type BillingProfilesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// BillingProfilesList200ApplicationJSON
// Paginated Result
type BillingProfilesList200ApplicationJSON struct {
	Data     []shared.BillingProfile `json:"data,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
}

type BillingProfilesListRequest struct {
	QueryParams BillingProfilesListQueryParams
	Security    BillingProfilesListSecurity
}

type BillingProfilesListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	BillingProfilesList200ApplicationJSONObject *BillingProfilesList200ApplicationJSON
}
