package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubmissionPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
}

type CreateSubmissionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateSubmissionRequest struct {
	PathParams CreateSubmissionPathParams
	Request    shared.AssignmentSubmissionUpdate `request:"mediaType=application/json"`
	Security   CreateSubmissionSecurity
}

type CreateSubmissionResponse struct {
	AssignmentSubmission *shared.AssignmentSubmission
	ContentType          string
	FlatErrorResponse    *shared.FlatErrorResponse
	StatusCode           int64
}
