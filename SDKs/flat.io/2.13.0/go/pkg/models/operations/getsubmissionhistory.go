package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubmissionHistoryPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
	Submission string `pathParam:"style=simple,explode=false,name=submission"`
}

type GetSubmissionHistorySecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetSubmissionHistoryRequest struct {
	PathParams GetSubmissionHistoryPathParams
	Security   GetSubmissionHistorySecurity
}

type GetSubmissionHistoryResponse struct {
	AssignmentSubmissionHistories []shared.AssignmentSubmissionHistory
	ContentType                   string
	FlatErrorResponse             *shared.FlatErrorResponse
	StatusCode                    int64
}
