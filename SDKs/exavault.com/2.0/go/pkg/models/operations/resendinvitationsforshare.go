package operations

import (
	"openapi/pkg/models/shared"
)

type ResendInvitationsForSharePathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=shareId"`
}

type ResendInvitationsForShareHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type ResendInvitationsForShareResendInvitationsRequestBody struct {
	RecipientID *int32 `json:"recipientId,omitempty"`
}

type ResendInvitationsForShareRequest struct {
	PathParams ResendInvitationsForSharePathParams
	Headers    ResendInvitationsForShareHeaders
	Request    *ResendInvitationsForShareResendInvitationsRequestBody `request:"mediaType=application/json"`
}

type ResendInvitationsForShareResponse struct {
	ContentType             string
	ShareRecipientsResponse *shared.ShareRecipientsResponse
	StatusCode              int64
}
