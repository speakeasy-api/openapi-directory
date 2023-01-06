package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionGroupsListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionGroupsListRequest struct {
	Security PrivateInstitutionGroupsListSecurity
}

type PrivateInstitutionGroupsListResponse struct {
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	Groups       []shared.Group
	StatusCode   int64
}
