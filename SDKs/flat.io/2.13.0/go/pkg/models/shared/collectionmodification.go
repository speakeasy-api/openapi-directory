package shared

// CollectionModification
// Edit the collection metadata
type CollectionModification struct {
	Privacy *CollectionPrivacyEnum `json:"privacy,omitempty"`
	Title   *string                `json:"title,omitempty"`
}
