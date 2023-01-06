package shared

// ImportAlreadyInProgressResponseLinks
// The action links
type ImportAlreadyInProgressResponseLinks struct {
	CancelCurrentImportation map[string]interface{} `json:"cancelCurrentImportation"`
	CurrentImportation       map[string]interface{} `json:"currentImportation"`
}
