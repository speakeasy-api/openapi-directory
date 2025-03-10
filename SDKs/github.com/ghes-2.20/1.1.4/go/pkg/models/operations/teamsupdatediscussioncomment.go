// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type TeamsUpdateDiscussionCommentRequestBody struct {
	// The discussion comment's body text.
	Body string `json:"body"`
}

type TeamsUpdateDiscussionCommentRequest struct {
	RequestBody      TeamsUpdateDiscussionCommentRequestBody `request:"mediaType=application/json"`
	CommentNumber    int64                                   `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64                                   `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64                                   `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsUpdateDiscussionCommentResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	TeamDiscussionComment *shared.TeamDiscussionComment
}
