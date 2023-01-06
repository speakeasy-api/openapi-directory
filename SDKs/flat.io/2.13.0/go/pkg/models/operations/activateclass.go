package operations

import (
	"openapi/pkg/models/shared"
)

type ActivateClassPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
}

type ActivateClassSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ActivateClassRequest struct {
	PathParams ActivateClassPathParams
	Security   ActivateClassSecurity
}

type ActivateClassResponse struct {
	ClassDetails      *shared.ClassDetails
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
