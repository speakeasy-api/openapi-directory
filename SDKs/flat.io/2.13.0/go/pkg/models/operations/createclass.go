package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClassSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateClassRequest struct {
	Request  shared.ClassCreation `request:"mediaType=application/json"`
	Security CreateClassSecurity
}

type CreateClassResponse struct {
	ClassDetails      *shared.ClassDetails
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
