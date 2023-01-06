package shared

// ReportByCategoryRequest
// Contains common filter parameters
type ReportByCategoryRequest struct {
	PageNumber *int32 `json:"pageNumber,omitempty"`
	PageSize   *int32 `json:"pageSize,omitempty"`
}
