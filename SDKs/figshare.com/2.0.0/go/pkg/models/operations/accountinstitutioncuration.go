package operations

import (
	"openapi/pkg/models/shared"
)

type AccountInstitutionCurationPathParams struct {
	CurationID int64 `pathParam:"style=simple,explode=false,name=curation_id"`
}

type AccountInstitutionCurationSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AccountInstitutionCurationRequest struct {
	PathParams AccountInstitutionCurationPathParams
	Security   AccountInstitutionCurationSecurity
}

type AccountInstitutionCurationResponse struct {
	ContentType    string
	CurationDetail *shared.CurationDetail
	ErrorMessage   *shared.ErrorMessage
	StatusCode     int64
}
