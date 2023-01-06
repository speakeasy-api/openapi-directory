package shared

import (
	"time"
)

// FieldLevelEncryptionProfile1
// A complex data type for field-level encryption profiles.
type FieldLevelEncryptionProfile1 struct {
	FieldLevelEncryptionProfileConfig FieldLevelEncryptionProfileConfig1
	ID                                string
	LastModifiedTime                  time.Time
}
