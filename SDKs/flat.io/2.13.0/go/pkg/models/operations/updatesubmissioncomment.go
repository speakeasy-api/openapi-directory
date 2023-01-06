package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubmissionCommentPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
	Comment    string `pathParam:"style=simple,explode=false,name=comment"`
	Submission string `pathParam:"style=simple,explode=false,name=submission"`
}

type UpdateSubmissionCommentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateSubmissionCommentRequest struct {
	PathParams UpdateSubmissionCommentPathParams
	Request    shared.AssignmentSubmissionCommentCreation `request:"mediaType=application/json"`
	Security   UpdateSubmissionCommentSecurity
}

type UpdateSubmissionCommentResponse struct {
	AssignmentSubmissionComment *shared.AssignmentSubmissionComment
	ContentType                 string
	FlatErrorResponse           *shared.FlatErrorResponse
	StatusCode                  int64
}
