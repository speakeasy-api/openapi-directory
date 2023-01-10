package shared

// ImportAlreadyInProgressResponseLinks
// The action links
type ImportAlreadyInProgressResponseLinks struct {
	CancelCurrentImportation LinksImportationCancelLink                   `json:"cancelCurrentImportation"`
	CurrentImportation       LinksImportationGetImportationMonitoringLink `json:"currentImportation"`
}
