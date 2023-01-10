package shared

// EncryptionEntityList
// Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.
type EncryptionEntityList struct {
	FieldPatterns FieldPatterns
	ProviderID    string
	PublicKeyID   string
}
