package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateShareByIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateShareByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type UpdateShareByIDUpdateShareRequestBodyRecipients struct {
	Email *string `json:"email,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type UpdateShareByIDUpdateShareRequestBody struct {
	AccessMode            *shared.AccessMode                                `json:"accessMode,omitempty"`
	Embed                 *bool                                             `json:"embed,omitempty"`
	Expiration            *time.Time                                        `json:"expiration,omitempty"`
	FileDropCreateFolders *bool                                             `json:"fileDropCreateFolders,omitempty"`
	HasNotification       *bool                                             `json:"hasNotification,omitempty"`
	IsPublic              *bool                                             `json:"isPublic,omitempty"`
	MessageBody           *string                                           `json:"messageBody,omitempty"`
	MessageSubject        *string                                           `json:"messageSubject,omitempty"`
	Name                  *string                                           `json:"name,omitempty"`
	NotificationEmails    []string                                          `json:"notificationEmails,omitempty"`
	Password              *string                                           `json:"password,omitempty"`
	Recipients            []UpdateShareByIDUpdateShareRequestBodyRecipients `json:"recipients,omitempty"`
	RequireEmail          *bool                                             `json:"requireEmail,omitempty"`
	Resources             []string                                          `json:"resources,omitempty"`
	Status                *int64                                            `json:"status,omitempty"`
}

type UpdateShareByIDRequest struct {
	PathParams UpdateShareByIDPathParams
	Headers    UpdateShareByIDHeaders
	Request    UpdateShareByIDUpdateShareRequestBody `request:"mediaType=application/json"`
}

type UpdateShareByIDResponse struct {
	ContentType   string
	ShareResponse *shared.ShareResponse
	StatusCode    int64
}
