package shared

// OrderExportations
// The list of Order report exportations.\
// The paginationResult properties can be null if the list is empty.
type OrderExportations struct {
	Exportations     []OrderExportationReporting   `json:"exportations"`
	Links            OrderExportationsLinks        `json:"links"`
	PaginationResult *BeezUpCommonPaginationResult `json:"paginationResult,omitempty"`
}
