// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetSnippetsWorkspaceEncodedIDCommitsSecurity struct {
	APIKey *string             `security:"scheme,type=apiKey,subtype=header,name=Authorization"`
	Basic  *shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
	Oauth2 *string             `security:"scheme,type=oauth2,name=Authorization"`
}

type GetSnippetsWorkspaceEncodedIDCommitsRequest struct {
	// The snippet id.
	EncodedID string `pathParam:"style=simple,explode=false,name=encoded_id"`
	// This can either be the workspace ID (slug) or the workspace UUID
	// surrounded by curly-braces, for example: `{workspace UUID}`.
	//
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetSnippetsWorkspaceEncodedIDCommitsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// If the authenticated user does not have access to the snippet.
	Error map[string]interface{}
	// The paginated list of snippet commits.
	PaginatedSnippetCommit *shared.PaginatedSnippetCommit
}
