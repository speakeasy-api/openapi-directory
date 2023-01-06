package shared

import (
	"time"
)

// CreateFieldLevelEncryptionConfigResultFieldLevelEncryption
// A complex data type that includes the profile configurations and other options specified for field-level encryption.
type CreateFieldLevelEncryptionConfigResultFieldLevelEncryption struct {
	FieldLevelEncryptionConfig FieldLevelEncryptionConfig
	ID                         string
	LastModifiedTime           time.Time
}

type CreateFieldLevelEncryptionConfigResult struct {
	FieldLevelEncryption *CreateFieldLevelEncryptionConfigResultFieldLevelEncryption
}
