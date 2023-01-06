package shared

// ReportByProductRequest
// Contains common filter parameters
type ReportByProductRequest struct {
	OrderBy          *PerformanceIndicatorTypeEnum `json:"orderBy,omitempty"`
	OrderByDirection *OrderByDirectionEnum         `json:"orderByDirection,omitempty"`
}
