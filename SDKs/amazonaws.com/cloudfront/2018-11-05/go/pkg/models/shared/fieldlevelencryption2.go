package shared

import (
	"time"
)

// FieldLevelEncryption2
// A complex data type that includes the profile configurations and other options specified for field-level encryption.
type FieldLevelEncryption2 struct {
	FieldLevelEncryptionConfig FieldLevelEncryptionConfig2
	ID                         string
	LastModifiedTime           time.Time
}
