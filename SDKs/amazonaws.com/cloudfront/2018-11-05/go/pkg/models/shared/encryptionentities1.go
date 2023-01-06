package shared

// EncryptionEntities1
// Complex data type for field-level encryption profiles that includes all of the encryption entities.
type EncryptionEntities1 struct {
	Items    []EncryptionEntityList
	Quantity int64
}
