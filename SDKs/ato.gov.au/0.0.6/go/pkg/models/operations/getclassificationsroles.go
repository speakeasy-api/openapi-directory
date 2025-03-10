// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetClassificationsRolesRequest struct {
	// The API key.
	APIKey string `header:"style=simple,explode=false,name=apiKey"`
}

type GetClassificationsRolesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// The specified resource was not found
	NotFound *shared.NotFound
	// Roles were retrieved successfully
	Roles []shared.Role
	// Request not authenticated due to missing, invalid, or expired token
	Unauthenticated *shared.Unauthenticated
}
