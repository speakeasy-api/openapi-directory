// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ProjectsCreateForOrgRequestBody struct {
	// The description of the project.
	Body *string `json:"body,omitempty"`
	// The name of the project.
	Name string `json:"name"`
}

type ProjectsCreateForOrgRequest struct {
	RequestBody ProjectsCreateForOrgRequestBody `request:"mediaType=application/json"`
	Org         string                          `pathParam:"style=simple,explode=false,name=org"`
}

type ProjectsCreateForOrgResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Requires authentication
	BasicError *shared.BasicError
	// Response
	Project *shared.Project
	// Validation failed
	ValidationErrorSimple *shared.ValidationErrorSimple
}
