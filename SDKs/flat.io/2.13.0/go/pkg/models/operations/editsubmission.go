package operations

import (
	"openapi/pkg/models/shared"
)

type EditSubmissionPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
	Submission string `pathParam:"style=simple,explode=false,name=submission"`
}

type EditSubmissionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type EditSubmissionRequest struct {
	PathParams EditSubmissionPathParams
	Request    shared.AssignmentSubmissionUpdate `request:"mediaType=application/json"`
	Security   EditSubmissionSecurity
}

type EditSubmissionResponse struct {
	AssignmentSubmission *shared.AssignmentSubmission
	ContentType          string
	FlatErrorResponse    *shared.FlatErrorResponse
	StatusCode           int64
}
