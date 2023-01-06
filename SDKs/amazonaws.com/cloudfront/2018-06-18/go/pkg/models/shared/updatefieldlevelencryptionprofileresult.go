package shared

import (
	"time"
)

// UpdateFieldLevelEncryptionProfileResultFieldLevelEncryptionProfile
// A complex data type for field-level encryption profiles.
type UpdateFieldLevelEncryptionProfileResultFieldLevelEncryptionProfile struct {
	FieldLevelEncryptionProfileConfig FieldLevelEncryptionProfileConfig
	ID                                string
	LastModifiedTime                  time.Time
}

type UpdateFieldLevelEncryptionProfileResult struct {
	FieldLevelEncryptionProfile *UpdateFieldLevelEncryptionProfileResultFieldLevelEncryptionProfile
}
