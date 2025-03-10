// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposGetCollaboratorPermissionLevelRequest struct {
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type ReposGetCollaboratorPermissionLevelResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Resource not found
	BasicError *shared.BasicError
	// if user has admin permissions
	RepositoryCollaboratorPermission *shared.RepositoryCollaboratorPermission
}
