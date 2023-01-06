package shared

// ContentTypeProfileList
// A field-level encryption content type profile.
type ContentTypeProfileList struct {
	ContentType string
	Format      FormatEnum
	ProfileID   *string
}
