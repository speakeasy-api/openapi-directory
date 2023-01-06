package operations

import (
	"openapi/pkg/models/shared"
)

type DisconnectVendorVendorEnum string

const (
	DisconnectVendorVendorEnumTesla      DisconnectVendorVendorEnum = "TESLA"
	DisconnectVendorVendorEnumBmw        DisconnectVendorVendorEnum = "BMW"
	DisconnectVendorVendorEnumAudi       DisconnectVendorVendorEnum = "AUDI"
	DisconnectVendorVendorEnumVolkswagen DisconnectVendorVendorEnum = "VOLKSWAGEN"
	DisconnectVendorVendorEnumHyundai    DisconnectVendorVendorEnum = "HYUNDAI"
	DisconnectVendorVendorEnumPeugeot    DisconnectVendorVendorEnum = "PEUGEOT"
	DisconnectVendorVendorEnumNissan     DisconnectVendorVendorEnum = "NISSAN"
)

type DisconnectVendorPathParams struct {
	Vendor DisconnectVendorVendorEnum `pathParam:"style=simple,explode=false,name=vendor"`
}

type DisconnectVendorSecurity struct {
	UserAccessToken shared.SchemeUserAccessToken `security:"scheme,type=oauth2"`
}

type DisconnectVendorRequest struct {
	PathParams DisconnectVendorPathParams
	Security   DisconnectVendorSecurity
}

type DisconnectVendorResponse struct {
	ContentType string
	StatusCode  int64
}
