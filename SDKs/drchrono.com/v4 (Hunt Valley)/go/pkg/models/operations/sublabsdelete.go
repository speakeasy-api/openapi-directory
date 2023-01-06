package operations

import (
	"openapi/pkg/models/shared"
)

type SublabsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SublabsDeleteSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type SublabsDeleteRequest struct {
	PathParams SublabsDeletePathParams
	Security   SublabsDeleteSecurity
}

type SublabsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
