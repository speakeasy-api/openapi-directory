package shared

// FieldLevelEncryptionProfileConfig1
// A complex data type of profiles for the field-level encryption.
type FieldLevelEncryptionProfileConfig1 struct {
	CallerReference    string
	Comment            *string
	EncryptionEntities EncryptionEntities
	Name               string
}
