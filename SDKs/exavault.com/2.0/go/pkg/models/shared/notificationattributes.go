package shared

import (
	"time"
)

type NotificationAttributesActionEnum string

const (
	NotificationAttributesActionEnumUpload   NotificationAttributesActionEnum = "upload"
	NotificationAttributesActionEnumDownload NotificationAttributesActionEnum = "download"
	NotificationAttributesActionEnumDelete   NotificationAttributesActionEnum = "delete"
	NotificationAttributesActionEnumAll      NotificationAttributesActionEnum = "all"
)

type NotificationAttributesTypeEnum string

const (
	NotificationAttributesTypeEnumFile         NotificationAttributesTypeEnum = "file"
	NotificationAttributesTypeEnumFolder       NotificationAttributesTypeEnum = "folder"
	NotificationAttributesTypeEnumSharedFolder NotificationAttributesTypeEnum = "shared_folder"
	NotificationAttributesTypeEnumSendReceipt  NotificationAttributesTypeEnum = "send_receipt"
	NotificationAttributesTypeEnumShareReceipt NotificationAttributesTypeEnum = "share_receipt"
	NotificationAttributesTypeEnumFileDrop     NotificationAttributesTypeEnum = "file_drop"
)

// NotificationAttributes
// Attributes for the notification including the path, recipients, and share data.
type NotificationAttributes struct {
	Action                         *NotificationAttributesActionEnum `json:"action,omitempty"`
	Created                        *time.Time                        `json:"created,omitempty"`
	Message                        *string                           `json:"message,omitempty"`
	Modified                       *time.Time                        `json:"modified,omitempty"`
	Name                           *string                           `json:"name,omitempty"`
	Path                           *string                           `json:"path,omitempty"`
	ReadableDescription            *string                           `json:"readableDescription,omitempty"`
	ReadableDescriptionWithoutPath *string                           `json:"readableDescriptionWithoutPath,omitempty"`
	Recipients                     []NotificationRecipient           `json:"recipients,omitempty"`
	SendEmail                      *bool                             `json:"sendEmail,omitempty"`
	ShareID                        *string                           `json:"shareId,omitempty"`
	Type                           *NotificationAttributesTypeEnum   `json:"type,omitempty"`
	UserID                         *string                           `json:"userId,omitempty"`
	Usernames                      []string                          `json:"usernames,omitempty"`
}
