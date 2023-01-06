package shared

import (
	"time"
)

// FieldLevelEncryption1
// A complex data type that includes the profile configurations and other options specified for field-level encryption.
type FieldLevelEncryption1 struct {
	FieldLevelEncryptionConfig FieldLevelEncryptionConfig1
	ID                         string
	LastModifiedTime           time.Time
}
