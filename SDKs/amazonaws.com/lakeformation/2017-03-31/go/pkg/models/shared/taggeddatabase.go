package shared

// TaggedDatabase
// A structure describing a database resource with tags.
type TaggedDatabase struct {
	Database *DatabaseResource `json:"Database,omitempty"`
	LFTags   []LfTagPair       `json:"LFTags,omitempty"`
}
