package shared

// FieldLevelEncryptionList
// List of field-level encrpytion configurations.
type FieldLevelEncryptionList struct {
	Items      []map[string]interface{}
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
