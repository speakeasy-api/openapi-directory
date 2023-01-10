package shared

// FieldLevelEncryptionProfileList
// List of field-level encryption profiles.
type FieldLevelEncryptionProfileList struct {
	Items      []FieldLevelEncryptionProfileSummaryList
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
