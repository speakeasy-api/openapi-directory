package shared

type ListWebAcLsResponse struct {
	NextMarker *string         `json:"NextMarker,omitempty"`
	WebACLs    []WebACLSummary `json:"WebACLs,omitempty"`
}
