package shared

// RelationshipData
// Identifying info for related record
type RelationshipData struct {
	ID   *int64  `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}
