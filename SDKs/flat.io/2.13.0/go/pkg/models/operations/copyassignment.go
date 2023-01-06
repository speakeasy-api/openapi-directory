package operations

import (
	"openapi/pkg/models/shared"
)

type CopyAssignmentPathParams struct {
	Assignment string `pathParam:"style=simple,explode=false,name=assignment"`
	Class      string `pathParam:"style=simple,explode=false,name=class"`
}

type CopyAssignmentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CopyAssignmentRequest struct {
	PathParams CopyAssignmentPathParams
	Request    shared.AssignmentCopy `request:"mediaType=application/json"`
	Security   CopyAssignmentSecurity
}

type CopyAssignmentResponse struct {
	Assignment        *shared.Assignment
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
