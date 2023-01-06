package shared

import (
	"time"
)

type ShareMessage struct {
	Body     *string    `json:"body,omitempty"`
	Created  *time.Time `json:"created,omitempty"`
	ID       *int32     `json:"id,omitempty"`
	Modified *time.Time `json:"modified,omitempty"`
	ShareID  *int32     `json:"shareId,omitempty"`
	Subject  *string    `json:"subject,omitempty"`
	UserID   *int32     `json:"userId,omitempty"`
}
