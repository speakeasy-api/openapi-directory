// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type OrgsSetPublicMembershipForAuthenticatedUserRequest struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type OrgsSetPublicMembershipForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Forbidden
	BasicError *shared.BasicError
}
