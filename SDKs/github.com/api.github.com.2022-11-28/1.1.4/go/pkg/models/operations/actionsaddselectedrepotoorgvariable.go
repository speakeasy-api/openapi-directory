// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ActionsAddSelectedRepoToOrgVariableRequest struct {
	// The name of the variable.
	Name string `pathParam:"style=simple,explode=false,name=name"`
	// The organization name. The name is not case sensitive.
	Org          string `pathParam:"style=simple,explode=false,name=org"`
	RepositoryID int64  `pathParam:"style=simple,explode=false,name=repository_id"`
}

type ActionsAddSelectedRepoToOrgVariableResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
