package shared

import (
	"time"
)

type ShareRecipientTypeEnum string

const (
	ShareRecipientTypeEnumOwner  ShareRecipientTypeEnum = "owner"
	ShareRecipientTypeEnumDirect ShareRecipientTypeEnum = "direct"
)

type ShareRecipient struct {
	Created  *time.Time              `json:"created,omitempty"`
	Email    *string                 `json:"email,omitempty"`
	Hash     *string                 `json:"hash,omitempty"`
	ID       *int32                  `json:"id,omitempty"`
	Received *bool                   `json:"received,omitempty"`
	Sent     *bool                   `json:"sent,omitempty"`
	ShareID  *string                 `json:"shareId,omitempty"`
	Type     *ShareRecipientTypeEnum `json:"type,omitempty"`
}
