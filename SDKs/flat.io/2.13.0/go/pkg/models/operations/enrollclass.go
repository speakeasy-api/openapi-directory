package operations

import (
	"openapi/pkg/models/shared"
)

type EnrollClassPathParams struct {
	EnrollmentCode string `pathParam:"style=simple,explode=false,name=enrollmentCode"`
}

type EnrollClassSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type EnrollClassRequest struct {
	PathParams EnrollClassPathParams
	Security   EnrollClassSecurity
}

type EnrollClassResponse struct {
	ClassDetails      *shared.ClassDetails
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
