package shared

import (
	"time"
)

// PublicKeySummaryList
// Contains information about a public key.
type PublicKeySummaryList struct {
	Comment     *string
	CreatedTime time.Time
	EncodedKey  string
	ID          string
	Name        string
}
