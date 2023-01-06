package shared

// EmailList
// A single email group list
type EmailList struct {
	Attributes    *EmailListAttributes    `json:"attributes,omitempty"`
	ID            *int64                  `json:"id,omitempty"`
	Relationships *EmailListRelationships `json:"relationships,omitempty"`
	Type          *string                 `json:"type,omitempty"`
}
