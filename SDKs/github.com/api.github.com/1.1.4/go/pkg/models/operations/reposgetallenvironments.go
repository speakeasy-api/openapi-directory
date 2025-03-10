// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposGetAllEnvironmentsRequest struct {
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

// ReposGetAllEnvironments200ApplicationJSON - Response
type ReposGetAllEnvironments200ApplicationJSON struct {
	Environments []shared.Environment `json:"environments,omitempty"`
	// The number of environments in this repository
	TotalCount *int64 `json:"total_count,omitempty"`
}

type ReposGetAllEnvironmentsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	ReposGetAllEnvironments200ApplicationJSONObject *ReposGetAllEnvironments200ApplicationJSON
}
