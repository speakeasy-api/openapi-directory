package shared

// FieldLevelEncryptionConfig
// A complex data type that includes the profile configurations specified for field-level encryption.
type FieldLevelEncryptionConfig struct {
	CallerReference          string
	Comment                  map[string]interface{}
	ContentTypeProfileConfig *ContentTypeProfileConfig
	QueryArgProfileConfig    *QueryArgProfileConfig
}
