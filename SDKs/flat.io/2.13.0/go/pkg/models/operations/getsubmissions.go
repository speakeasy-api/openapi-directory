package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubmissionsPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
}

type GetSubmissionsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetSubmissionsRequest struct {
	PathParams GetSubmissionsPathParams
	Security   GetSubmissionsSecurity
}

type GetSubmissionsResponse struct {
	AssignmentSubmissions []shared.AssignmentSubmission
	ContentType           string
	FlatErrorResponse     *shared.FlatErrorResponse
	StatusCode            int64
}
