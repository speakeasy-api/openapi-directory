package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssignmentsPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
}

type ListAssignmentsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListAssignmentsRequest struct {
	PathParams ListAssignmentsPathParams
	Security   ListAssignmentsSecurity
}

type ListAssignmentsResponse struct {
	Assignments       []shared.Assignment
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
