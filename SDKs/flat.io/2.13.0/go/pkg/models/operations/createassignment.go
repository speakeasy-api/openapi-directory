package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssignmentPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
}

type CreateAssignmentSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateAssignmentRequest struct {
	PathParams CreateAssignmentPathParams
	Request    *shared.AssignmentCreation `request:"mediaType=application/json"`
	Security   CreateAssignmentSecurity
}

type CreateAssignmentResponse struct {
	Assignment        *shared.Assignment
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
