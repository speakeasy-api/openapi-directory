package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type AddShareHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type AddShareAddShareRequestBodyRecipients struct {
	Email *string `json:"email,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type AddShareAddShareRequestBodyTypeEnum string

const (
	AddShareAddShareRequestBodyTypeEnumSharedFolder AddShareAddShareRequestBodyTypeEnum = "shared_folder"
	AddShareAddShareRequestBodyTypeEnumReceive      AddShareAddShareRequestBodyTypeEnum = "receive"
	AddShareAddShareRequestBodyTypeEnumSend         AddShareAddShareRequestBodyTypeEnum = "send"
)

type AddShareAddShareRequestBody struct {
	AccessMode            *shared.AccessMode                      `json:"accessMode,omitempty"`
	Embed                 *bool                                   `json:"embed,omitempty"`
	Expiration            *time.Time                              `json:"expiration,omitempty"`
	FileDropCreateFolders *bool                                   `json:"fileDropCreateFolders,omitempty"`
	HasNotification       *bool                                   `json:"hasNotification,omitempty"`
	IsPublic              *bool                                   `json:"isPublic,omitempty"`
	MessageBody           *string                                 `json:"messageBody,omitempty"`
	MessageSubject        *string                                 `json:"messageSubject,omitempty"`
	Name                  string                                  `json:"name"`
	NotificationEmails    []string                                `json:"notificationEmails,omitempty"`
	Password              *string                                 `json:"password,omitempty"`
	Recipients            []AddShareAddShareRequestBodyRecipients `json:"recipients,omitempty"`
	RequireEmail          *bool                                   `json:"requireEmail,omitempty"`
	Resources             []string                                `json:"resources,omitempty"`
	SendingLocalFiles     *bool                                   `json:"sendingLocalFiles,omitempty"`
	Type                  AddShareAddShareRequestBodyTypeEnum     `json:"type"`
}

type AddShareRequest struct {
	Headers AddShareHeaders
	Request *AddShareAddShareRequestBody `request:"mediaType=application/json"`
}

type AddShareResponse struct {
	ContentType   string
	ShareResponse *shared.ShareResponse
	StatusCode    int64
}
