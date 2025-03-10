// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposTransferRequestBody struct {
	// The username or organization name the repository will be transferred to.
	NewOwner string `json:"new_owner"`
	// ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
	TeamIds []int64 `json:"team_ids,omitempty"`
}

type ReposTransferRequest struct {
	RequestBody ReposTransferRequestBody `request:"mediaType=application/json"`
	Owner       string                   `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string                   `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposTransferResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	MinimalRepository *shared.MinimalRepository
}
