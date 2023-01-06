package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOrganizationInvitationSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateOrganizationInvitationRequest struct {
	Request  *shared.OrganizationInvitationCreation `request:"mediaType=application/json"`
	Security CreateOrganizationInvitationSecurity
}

type CreateOrganizationInvitationResponse struct {
	ContentType            string
	FlatErrorResponse      *shared.FlatErrorResponse
	OrganizationInvitation *shared.OrganizationInvitation
	StatusCode             int64
}
