// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListGroupsRequest struct {
	// The number of groups to return.  Defaults to 20.
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	// The number of groups to skip before starting the result set.  Defaults to 0.
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
	// Sort order, ascending (`asc`) or descending (`desc`).
	Order *shared.SortOrderEnum `queryParam:"style=form,explode=true,name=order"`
	// The field to sort by.  Can be one of:
	//
	// * `name`
	// * `createdOn`
	//
	Orderby *shared.SortByEnum `queryParam:"style=form,explode=true,name=orderby"`
}

type ListGroupsResponse struct {
	ContentType string
	// Common response for all operations that can fail with an unexpected server error.
	Error *shared.Error
	// On a successful response, returns a bounded set of groups.
	GroupSearchResults *shared.GroupSearchResults
	StatusCode         int
	RawResponse        *http.Response
}
