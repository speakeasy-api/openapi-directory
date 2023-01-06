package operations

import (
	"openapi/pkg/models/shared"
)

type ImplantableDevicesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ImplantableDevicesReadQueryParams struct {
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	MuDate      *string `queryParam:"style=form,explode=true,name=mu_date"`
	MuDateRange *string `queryParam:"style=form,explode=true,name=mu_date_range"`
	Patient     *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type ImplantableDevicesReadSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

type ImplantableDevicesReadRequest struct {
	PathParams  ImplantableDevicesReadPathParams
	QueryParams ImplantableDevicesReadQueryParams
	Security    ImplantableDevicesReadSecurity
}

type ImplantableDevicesReadResponse struct {
	ContentType       string
	ImplantableDevice *shared.ImplantableDevice
	StatusCode        int64
}
