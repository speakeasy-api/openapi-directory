// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ElectioneeringByCandidate struct {
	Candidate     *string  `json:"candidate,omitempty"`
	CandidateID   *string  `json:"candidate_id,omitempty"`
	CandidateName *string  `json:"candidate_name,omitempty"`
	Committee     *string  `json:"committee,omitempty"`
	CommitteeID   *string  `json:"committee_id,omitempty"`
	CommitteeName *string  `json:"committee_name,omitempty"`
	Count         *int     `json:"count,omitempty"`
	Cycle         *int     `json:"cycle,omitempty"`
	Total         *float64 `json:"total,omitempty"`
}
