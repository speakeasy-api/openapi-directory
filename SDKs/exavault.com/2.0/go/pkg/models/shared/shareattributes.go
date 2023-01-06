package shared

import (
	"time"
)

type ShareAttributesTrackingStatusEnum string

const (
	ShareAttributesTrackingStatusEnumComplete   ShareAttributesTrackingStatusEnum = "complete"
	ShareAttributesTrackingStatusEnumIncomplete ShareAttributesTrackingStatusEnum = "incomplete"
	ShareAttributesTrackingStatusEnumPending    ShareAttributesTrackingStatusEnum = "pending"
)

type ShareAttributesTypeEnum string

const (
	ShareAttributesTypeEnumSharedFolder ShareAttributesTypeEnum = "shared_folder"
	ShareAttributesTypeEnumSend         ShareAttributesTypeEnum = "send"
	ShareAttributesTypeEnumReceive      ShareAttributesTypeEnum = "receive"
)

// ShareAttributes
// Attributes of the share including the name, path and share recipients.
type ShareAttributes struct {
	AccessDescription     *string                            `json:"accessDescription,omitempty"`
	AccessMode            *AccessMode                        `json:"accessMode,omitempty"`
	Created               *time.Time                         `json:"created,omitempty"`
	Embed                 *bool                              `json:"embed,omitempty"`
	Expiration            *string                            `json:"expiration,omitempty"`
	Expired               *bool                              `json:"expired,omitempty"`
	FileDropCreateFolders *bool                              `json:"fileDropCreateFolders,omitempty"`
	FormID                *int64                             `json:"formId,omitempty"`
	HasNotification       *bool                              `json:"hasNotification,omitempty"`
	HasPassword           *bool                              `json:"hasPassword,omitempty"`
	Hash                  *string                            `json:"hash,omitempty"`
	Inherited             *bool                              `json:"inherited,omitempty"`
	Messages              []ShareMessage                     `json:"messages,omitempty"`
	Modified              *time.Time                         `json:"modified,omitempty"`
	Name                  *string                            `json:"name,omitempty"`
	OwnerHash             *string                            `json:"ownerHash,omitempty"`
	Paths                 []string                           `json:"paths,omitempty"`
	Public                *bool                              `json:"public,omitempty"`
	Recipients            []ShareRecipient                   `json:"recipients,omitempty"`
	RequireEmail          *bool                              `json:"requireEmail,omitempty"`
	Resent                *time.Time                         `json:"resent,omitempty"`
	Status                *int32                             `json:"status,omitempty"`
	TrackingStatus        *ShareAttributesTrackingStatusEnum `json:"trackingStatus,omitempty"`
	Type                  *ShareAttributesTypeEnum           `json:"type,omitempty"`
}
