package operations

import (
	"openapi/pkg/models/shared"
)

type SublabsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SublabsReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type SublabsReadRequest struct {
	PathParams SublabsReadPathParams
	Security   SublabsReadSecurity
}

type SublabsReadResponse struct {
	ContentType       string
	LabVendorLocation *shared.LabVendorLocation
	StatusCode        int64
}
