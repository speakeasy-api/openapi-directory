package operations

import (
	"openapi/pkg/models/shared"
)

type ArchiveClassPathParams struct {
	Class string `pathParam:"style=simple,explode=false,name=class"`
}

type ArchiveClassSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ArchiveClassRequest struct {
	PathParams ArchiveClassPathParams
	Security   ArchiveClassSecurity
}

type ArchiveClassResponse struct {
	ClassDetails      *shared.ClassDetails
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
