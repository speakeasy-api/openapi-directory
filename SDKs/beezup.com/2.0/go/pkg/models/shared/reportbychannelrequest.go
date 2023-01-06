package shared

// ReportByChannelRequest
// Contains common filter parameters
type ReportByChannelRequest struct {
	PageNumber *int32 `json:"pageNumber,omitempty"`
	PageSize   *int32 `json:"pageSize,omitempty"`
}
