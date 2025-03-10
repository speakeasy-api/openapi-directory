// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetSavedFiltersRequest struct {
	// Page Number
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// Project's identifier
	ProjectSlug string `pathParam:"style=simple,explode=false,name=project_slug"`
	// Page Size
	Size *int64 `queryParam:"style=form,explode=true,name=size"`
	// User's identifier
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

// GetSavedFilters200ApplicationJSON - Successful operation
type GetSavedFilters200ApplicationJSON struct {
	Count    *int64                      `json:"count,omitempty"`
	Next     *string                     `json:"next,omitempty"`
	Page     *int64                      `json:"page,omitempty"`
	Previous *string                     `json:"previous,omitempty"`
	Results  []shared.ProjectSavedFilter `json:"results,omitempty"`
	Size     *int64                      `json:"size,omitempty"`
}

type GetSavedFiltersResponse struct {
	ContentType string
	// error payload
	DefaultPayload *shared.DefaultPayload
	StatusCode     int
	RawResponse    *http.Response
	// Successful operation
	GetSavedFilters200ApplicationJSONObject *GetSavedFilters200ApplicationJSON
}
