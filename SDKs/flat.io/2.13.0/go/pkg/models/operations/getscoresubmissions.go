package operations

import (
	"openapi/pkg/models/shared"
)

type GetScoreSubmissionsPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type GetScoreSubmissionsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScoreSubmissionsRequest struct {
	PathParams GetScoreSubmissionsPathParams
	Security   GetScoreSubmissionsSecurity
}

type GetScoreSubmissionsResponse struct {
	AssignmentSubmissions []shared.AssignmentSubmission
	ContentType           string
	FlatErrorResponse     *shared.FlatErrorResponse
	StatusCode            int64
}
