package shared

// FieldLevelEncryptionConfig1
// A complex data type that includes the profile configurations specified for field-level encryption.
type FieldLevelEncryptionConfig1 struct {
	CallerReference          string
	Comment                  *string
	ContentTypeProfileConfig *ContentTypeProfileConfig1
	QueryArgProfileConfig    *QueryArgProfileConfig
}
