package shared

import (
	"time"
)

// PublicKeySummaryList
//
//	Public key information summary.
type PublicKeySummaryList struct {
	Comment     *string
	CreatedTime time.Time
	EncodedKey  string
	ID          string
	Name        string
}
