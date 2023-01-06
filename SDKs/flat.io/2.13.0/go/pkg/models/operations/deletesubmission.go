package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubmissionPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
	Submission string `pathParam:"style=simple,explode=false,name=submission"`
}

type DeleteSubmissionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteSubmissionRequest struct {
	PathParams DeleteSubmissionPathParams
	Security   DeleteSubmissionSecurity
}

type DeleteSubmissionResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
