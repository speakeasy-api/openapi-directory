// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TeamsCreateDiscussionCommentLegacyRequestBody struct {
	// The discussion comment's body text.
	Body string `json:"body"`
}

type TeamsCreateDiscussionCommentLegacyRequest struct {
	RequestBody      TeamsCreateDiscussionCommentLegacyRequestBody `request:"mediaType=application/json"`
	DiscussionNumber int64                                         `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64                                         `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCreateDiscussionCommentLegacyResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	TeamDiscussionComment *shared.TeamDiscussionComment
}
