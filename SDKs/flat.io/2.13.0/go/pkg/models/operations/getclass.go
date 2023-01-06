package operations

import (
	"openapi/pkg/models/shared"
)

type GetClassPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
}

type GetClassSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetClassRequest struct {
	PathParams GetClassPathParams
	Security   GetClassSecurity
}

type GetClassResponse struct {
	ClassDetails      *shared.ClassDetails
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
