package shared

// EncryptionEntities
// Complex data type for field-level encryption profiles that includes all of the encryption entities.
type EncryptionEntities struct {
	Items    map[string]interface{}
	Quantity int64
}
