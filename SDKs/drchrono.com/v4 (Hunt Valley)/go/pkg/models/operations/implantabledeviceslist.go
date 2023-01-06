package operations

import (
	"openapi/pkg/models/shared"
)

type ImplantableDevicesListQueryParams struct {
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	Doctor      *int64  `queryParam:"style=form,explode=true,name=doctor"`
	MuDate      *string `queryParam:"style=form,explode=true,name=mu_date"`
	MuDateRange *string `queryParam:"style=form,explode=true,name=mu_date_range"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Patient     *int64  `queryParam:"style=form,explode=true,name=patient"`
}

type ImplantableDevicesListSecurity struct {
	DrchronoOauth2 shared.SchemeDrchronoOauth2 `security:"scheme,type=oauth2"`
}

// ImplantableDevicesList200ApplicationJSON
// Paginated Result
type ImplantableDevicesList200ApplicationJSON struct {
	Data     []shared.ImplantableDevice `json:"data,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
}

type ImplantableDevicesListRequest struct {
	QueryParams ImplantableDevicesListQueryParams
	Security    ImplantableDevicesListSecurity
}

type ImplantableDevicesListResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ImplantableDevicesList200ApplicationJSONObject *ImplantableDevicesList200ApplicationJSON
}
