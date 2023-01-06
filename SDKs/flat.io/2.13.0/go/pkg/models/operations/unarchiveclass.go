package operations

import (
	"openapi/pkg/models/shared"
)

type UnarchiveClassPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
}

type UnarchiveClassSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UnarchiveClassRequest struct {
	PathParams UnarchiveClassPathParams
	Security   UnarchiveClassSecurity
}

type UnarchiveClassResponse struct {
	ClassDetails      *shared.ClassDetails
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
