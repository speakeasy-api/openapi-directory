package shared

// DocumentInfo
// Identifies a document for which to retrieve status information
type DocumentInfo struct {
	Attributes []DocumentAttribute `json:"Attributes,omitempty"`
	DocumentID string              `json:"DocumentId"`
}
