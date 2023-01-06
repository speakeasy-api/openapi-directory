package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveOrganizationInvitationPathParams struct {
	Invitation string `pathParam:"style=simple,explode=false,name=invitation"`
}

type RemoveOrganizationInvitationSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type RemoveOrganizationInvitationRequest struct {
	PathParams RemoveOrganizationInvitationPathParams
	Security   RemoveOrganizationInvitationSecurity
}

type RemoveOrganizationInvitationResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
