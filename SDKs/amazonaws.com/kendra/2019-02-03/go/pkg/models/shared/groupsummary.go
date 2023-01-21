package shared

// GroupSummary
//
//	Group summary information.
type GroupSummary struct {
	GroupID    *string `json:"GroupId,omitempty"`
	OrderingID *int64  `json:"OrderingId,omitempty"`
}
