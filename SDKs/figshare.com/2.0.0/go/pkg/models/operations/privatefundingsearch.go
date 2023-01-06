package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateFundingSearchSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateFundingSearchRequest struct {
	Request  *shared.FundingSearch `request:"mediaType=application/json"`
	Security PrivateFundingSearchSecurity
}

type PrivateFundingSearchResponse struct {
	ContentType         string
	ErrorMessage        *shared.ErrorMessage
	FundingInformations []shared.FundingInformation
	StatusCode          int64
}
