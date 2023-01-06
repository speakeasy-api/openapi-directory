package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubmissionCommentPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
	Comment    string `pathParam:"style=simple,explode=false,name=comment"`
	Submission string `pathParam:"style=simple,explode=false,name=submission"`
}

type DeleteSubmissionCommentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteSubmissionCommentRequest struct {
	PathParams DeleteSubmissionCommentPathParams
	Security   DeleteSubmissionCommentSecurity
}

type DeleteSubmissionCommentResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
