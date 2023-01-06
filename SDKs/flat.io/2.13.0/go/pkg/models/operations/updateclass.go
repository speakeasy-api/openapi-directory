package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClassPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
}

type UpdateClassSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateClassRequest struct {
	PathParams UpdateClassPathParams
	Request    *shared.ClassUpdate `request:"mediaType=application/json"`
	Security   UpdateClassSecurity
}

type UpdateClassResponse struct {
	ClassDetails      *shared.ClassDetails
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
