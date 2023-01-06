package shared

// ListFieldLevelEncryptionConfigsResultFieldLevelEncryptionList
// List of field-level encrpytion configurations.
type ListFieldLevelEncryptionConfigsResultFieldLevelEncryptionList struct {
	Items      []map[string]interface{}
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}

type ListFieldLevelEncryptionConfigsResult struct {
	FieldLevelEncryptionList *ListFieldLevelEncryptionConfigsResultFieldLevelEncryptionList
}
