package operations

import (
	"openapi/pkg/models/shared"
)

type SublabsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SublabsUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type SublabsUpdateRequest struct {
	PathParams SublabsUpdatePathParams
	Security   SublabsUpdateSecurity
}

type SublabsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
