// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ProjectsRemoveCollaboratorRequest struct {
	ProjectID int64  `pathParam:"style=simple,explode=false,name=project_id"`
	Username  string `pathParam:"style=simple,explode=false,name=username"`
}

type ProjectsRemoveCollaboratorResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Requires authentication
	BasicError *shared.BasicError
	// Validation failed
	ValidationError *shared.ValidationError
}
