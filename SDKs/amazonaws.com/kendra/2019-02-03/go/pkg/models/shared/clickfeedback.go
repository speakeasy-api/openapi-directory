package shared

import (
	"time"
)

// ClickFeedback
// Gathers information about when a particular result was clicked by a user. Your application uses the <code>SubmitFeedback</code> operation to provide click information.
type ClickFeedback struct {
	ClickTime time.Time `json:"ClickTime"`
	ResultID  string    `json:"ResultId"`
}
