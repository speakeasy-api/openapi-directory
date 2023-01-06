package shared

import (
	"time"
)

type NotificationRecipient struct {
	Created        *time.Time `json:"created,omitempty"`
	Email          *string    `json:"email,omitempty"`
	ID             *int32     `json:"id,omitempty"`
	Modified       *time.Time `json:"modified,omitempty"`
	NotificationID *int64     `json:"notificationId,omitempty"`
}
