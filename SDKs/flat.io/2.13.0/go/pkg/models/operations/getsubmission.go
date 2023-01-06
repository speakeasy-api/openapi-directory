package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubmissionPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
	Submission string `pathParam:"style=simple,explode=false,name=submission"`
}

type GetSubmissionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetSubmissionRequest struct {
	PathParams GetSubmissionPathParams
	Security   GetSubmissionSecurity
}

type GetSubmissionResponse struct {
	AssignmentSubmission *shared.AssignmentSubmission
	ContentType          string
	FlatErrorResponse    *shared.FlatErrorResponse
	StatusCode           int64
}
