package shared

// FieldLevelEncryptionConfig2
// A complex data type that includes the profile configurations specified for field-level encryption.
type FieldLevelEncryptionConfig2 struct {
	CallerReference          string
	Comment                  *string
	ContentTypeProfileConfig *ContentTypeProfileConfig
	QueryArgProfileConfig    *QueryArgProfileConfig1
}
