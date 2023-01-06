package operations

import (
	"openapi/pkg/models/shared"
)

type ListClassStudentSubmissionsPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
	User  string `pathParam:"style=simple,explode=false,name=user"`
}

type ListClassStudentSubmissionsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListClassStudentSubmissionsRequest struct {
	PathParams ListClassStudentSubmissionsPathParams
	Security   ListClassStudentSubmissionsSecurity
}

type ListClassStudentSubmissionsResponse struct {
	AssignmentSubmissions []shared.AssignmentSubmission
	ContentType           string
	FlatErrorResponse     *shared.FlatErrorResponse
	StatusCode            int64
}
