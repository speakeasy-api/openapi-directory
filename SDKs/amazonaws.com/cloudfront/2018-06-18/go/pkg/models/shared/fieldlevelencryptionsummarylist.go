package shared

import (
	"time"
)

// FieldLevelEncryptionSummaryList
// A summary of a field-level encryption item.
type FieldLevelEncryptionSummaryList struct {
	Comment                  *string
	ContentTypeProfileConfig *ContentTypeProfileConfig
	ID                       string
	LastModifiedTime         time.Time
	QueryArgProfileConfig    *QueryArgProfileConfig
}
