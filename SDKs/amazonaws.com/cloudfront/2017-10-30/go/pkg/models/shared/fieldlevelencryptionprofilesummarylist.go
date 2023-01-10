package shared

import (
	"time"
)

// FieldLevelEncryptionProfileSummaryList
// The field-level encryption profile summary.
type FieldLevelEncryptionProfileSummaryList struct {
	Comment            *string
	EncryptionEntities EncryptionEntities
	ID                 string
	LastModifiedTime   time.Time
	Name               string
}
