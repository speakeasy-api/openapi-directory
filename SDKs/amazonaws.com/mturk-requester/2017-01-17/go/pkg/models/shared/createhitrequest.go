package shared

type CreateHitRequest struct {
	AssignmentDurationInSeconds int64                      `json:"AssignmentDurationInSeconds"`
	AssignmentReviewPolicy      *ReviewPolicy              `json:"AssignmentReviewPolicy,omitempty"`
	AutoApprovalDelayInSeconds  *int64                     `json:"AutoApprovalDelayInSeconds,omitempty"`
	Description                 string                     `json:"Description"`
	HITLayoutID                 *string                    `json:"HITLayoutId,omitempty"`
	HITLayoutParameters         []HitLayoutParameter       `json:"HITLayoutParameters,omitempty"`
	HITReviewPolicy             *ReviewPolicy              `json:"HITReviewPolicy,omitempty"`
	Keywords                    *string                    `json:"Keywords,omitempty"`
	LifetimeInSeconds           int64                      `json:"LifetimeInSeconds"`
	MaxAssignments              *int64                     `json:"MaxAssignments,omitempty"`
	QualificationRequirements   []QualificationRequirement `json:"QualificationRequirements,omitempty"`
	Question                    *string                    `json:"Question,omitempty"`
	RequesterAnnotation         *string                    `json:"RequesterAnnotation,omitempty"`
	Reward                      string                     `json:"Reward"`
	Title                       string                     `json:"Title"`
	UniqueRequestToken          *string                    `json:"UniqueRequestToken,omitempty"`
}
