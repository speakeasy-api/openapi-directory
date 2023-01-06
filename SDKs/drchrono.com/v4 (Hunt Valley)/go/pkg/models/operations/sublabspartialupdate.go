package operations

import (
	"openapi/pkg/models/shared"
)

type SublabsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SublabsPartialUpdateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type SublabsPartialUpdateRequest struct {
	PathParams SublabsPartialUpdatePathParams
	Security   SublabsPartialUpdateSecurity
}

type SublabsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
