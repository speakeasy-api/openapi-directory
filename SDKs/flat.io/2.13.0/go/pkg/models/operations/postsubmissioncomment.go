package operations

import (
	"openapi/pkg/models/shared"
)

type PostSubmissionCommentPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
	Submission string `pathParam:"style=simple,explode=false,name=submission"`
}

type PostSubmissionCommentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostSubmissionCommentRequest struct {
	PathParams PostSubmissionCommentPathParams
	Request    shared.AssignmentSubmissionCommentCreation `request:"mediaType=application/json"`
	Security   PostSubmissionCommentSecurity
}

type PostSubmissionCommentResponse struct {
	AssignmentSubmissionComment *shared.AssignmentSubmissionComment
	ContentType                 string
	FlatErrorResponse           *shared.FlatErrorResponse
	StatusCode                  int64
}
