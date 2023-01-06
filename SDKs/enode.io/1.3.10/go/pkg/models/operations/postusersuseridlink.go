package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersUseridLinkPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PostUsersUseridLinkRequestBodyVendorEnum string

const (
	PostUsersUseridLinkRequestBodyVendorEnumTesla      PostUsersUseridLinkRequestBodyVendorEnum = "TESLA"
	PostUsersUseridLinkRequestBodyVendorEnumBmw        PostUsersUseridLinkRequestBodyVendorEnum = "BMW"
	PostUsersUseridLinkRequestBodyVendorEnumAudi       PostUsersUseridLinkRequestBodyVendorEnum = "AUDI"
	PostUsersUseridLinkRequestBodyVendorEnumVolkswagen PostUsersUseridLinkRequestBodyVendorEnum = "VOLKSWAGEN"
	PostUsersUseridLinkRequestBodyVendorEnumHyundai    PostUsersUseridLinkRequestBodyVendorEnum = "HYUNDAI"
	PostUsersUseridLinkRequestBodyVendorEnumPeugeot    PostUsersUseridLinkRequestBodyVendorEnum = "PEUGEOT"
	PostUsersUseridLinkRequestBodyVendorEnumNissan     PostUsersUseridLinkRequestBodyVendorEnum = "NISSAN"
)

type PostUsersUseridLinkRequestBody struct {
	ForceLanguage *string                                   `json:"forceLanguage,omitempty"`
	LinkMultiple  *bool                                     `json:"linkMultiple,omitempty"`
	UserImage     *string                                   `json:"userImage,omitempty"`
	UserName      *string                                   `json:"userName,omitempty"`
	Vendor        *PostUsersUseridLinkRequestBodyVendorEnum `json:"vendor,omitempty"`
}

type PostUsersUseridLinkSecurity struct {
	ClientAccessToken shared.SchemeClientAccessToken `security:"scheme,type=oauth2"`
}

type PostUsersUseridLink200ApplicationJSON struct {
	LinkState *string `json:"linkState,omitempty"`
}

type PostUsersUseridLinkRequest struct {
	PathParams PostUsersUseridLinkPathParams
	Request    *PostUsersUseridLinkRequestBody `request:"mediaType=application/json"`
	Security   PostUsersUseridLinkSecurity
}

type PostUsersUseridLinkResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	PostUsersUseridLink200ApplicationJSONObject *PostUsersUseridLink200ApplicationJSON
}
