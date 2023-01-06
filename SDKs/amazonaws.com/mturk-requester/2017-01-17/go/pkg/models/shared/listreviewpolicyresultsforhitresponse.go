package shared

type ListReviewPolicyResultsForHitResponse struct {
	AssignmentReviewPolicy *ReviewPolicy `json:"AssignmentReviewPolicy,omitempty"`
	AssignmentReviewReport *ReviewReport `json:"AssignmentReviewReport,omitempty"`
	HITID                  *string       `json:"HITId,omitempty"`
	HITReviewPolicy        *ReviewPolicy `json:"HITReviewPolicy,omitempty"`
	HITReviewReport        *ReviewReport `json:"HITReviewReport,omitempty"`
	NextToken              *string       `json:"NextToken,omitempty"`
}
