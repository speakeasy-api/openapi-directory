package shared

import (
	"time"
)

// EmailListAttributes
// Information for the email list, including its short title and recipient emails
type EmailListAttributes struct {
	Created  *time.Time `json:"created,omitempty"`
	Emails   []string   `json:"emails,omitempty"`
	Modified *time.Time `json:"modified,omitempty"`
	Name     *string    `json:"name,omitempty"`
}
