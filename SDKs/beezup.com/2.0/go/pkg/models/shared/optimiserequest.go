package shared

// OptimiseRequest
// Contains common filter parameters
type OptimiseRequest struct {
	PageNumber *int32 `json:"pageNumber,omitempty"`
	PageSize   *int32 `json:"pageSize,omitempty"`
}
