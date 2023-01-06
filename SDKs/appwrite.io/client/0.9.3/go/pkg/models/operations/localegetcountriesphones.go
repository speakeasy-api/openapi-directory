package operations

import (
	"openapi/pkg/models/shared"
)

type LocaleGetCountriesPhonesSecurity struct {
	JWT     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type LocaleGetCountriesPhonesRequest struct {
	Security LocaleGetCountriesPhonesSecurity
}

type LocaleGetCountriesPhonesResponse struct {
	ContentType string
	StatusCode  int64
	PhoneList   *shared.PhoneList
}
