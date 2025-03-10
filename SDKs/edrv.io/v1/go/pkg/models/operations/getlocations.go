// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"time"
)

type GetLocationsRequest struct {
	// Date as ISO String
	CreatedAtDollarGte *time.Time `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
	// Date as ISO String
	CreatedAtDollarLte *time.Time `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
	// Populate organization
	IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
	// Enable pagination
	PaginateEnabled *bool `queryParam:"style=form,explode=true,name=paginate_enabled"`
	// Number of results per page
	PaginateLimit *int64 `queryParam:"style=form,explode=true,name=paginate_limit"`
	// The queried page index
	PaginatePage *string `queryParam:"style=form,explode=true,name=paginate_page"`
	// Sort data by this key
	SortBy *string `queryParam:"style=form,explode=true,name=sort_by"`
	// asc to sort ascending (default is desc - descending)
	SortOrder *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
	// Date as ISO String
	UpdatedAtDollarGte *time.Time `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
	// Date as ISO String
	UpdatedAtDollarLte *time.Time `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
}

type GetLocationsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
