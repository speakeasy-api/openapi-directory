package shared

type UpdateHitReviewStatusRequest struct {
	HITID  string `json:"HITId"`
	Revert *bool  `json:"Revert,omitempty"`
}
