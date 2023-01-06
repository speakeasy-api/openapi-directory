package operations

import (
	"openapi/pkg/models/shared"
)

type UnarchiveAssignmentPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
}

type UnarchiveAssignmentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UnarchiveAssignmentRequest struct {
	PathParams UnarchiveAssignmentPathParams
	Security   UnarchiveAssignmentSecurity
}

type UnarchiveAssignmentResponse struct {
	Assignment        *shared.Assignment
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
