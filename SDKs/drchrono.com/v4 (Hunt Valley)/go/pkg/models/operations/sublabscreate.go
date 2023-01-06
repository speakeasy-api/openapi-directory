package operations

import (
	"openapi/pkg/models/shared"
)

type SublabsCreateSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type SublabsCreateRequest struct {
	Security SublabsCreateSecurity
}

type SublabsCreateResponse struct {
	ContentType       string
	LabVendorLocation *shared.LabVendorLocation
	StatusCode        int64
}
