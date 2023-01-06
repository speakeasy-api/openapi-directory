package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubmissionCommentsPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
	Submission string `pathParam:"style=simple,explode=false,name=submission"`
}

type GetSubmissionCommentsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetSubmissionCommentsRequest struct {
	PathParams GetSubmissionCommentsPathParams
	Security   GetSubmissionCommentsSecurity
}

type GetSubmissionCommentsResponse struct {
	AssignmentSubmissionComments []shared.AssignmentSubmissionComment
	ContentType                  string
	FlatErrorResponse            *shared.FlatErrorResponse
	StatusCode                   int64
}
