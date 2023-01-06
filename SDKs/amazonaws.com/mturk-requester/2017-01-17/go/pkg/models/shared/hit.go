package shared

import (
	"time"
)

// Hit
//
//	The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
type Hit struct {
	AssignmentDurationInSeconds  *int64                     `json:"AssignmentDurationInSeconds,omitempty"`
	AutoApprovalDelayInSeconds   *int64                     `json:"AutoApprovalDelayInSeconds,omitempty"`
	CreationTime                 *time.Time                 `json:"CreationTime,omitempty"`
	Description                  *string                    `json:"Description,omitempty"`
	Expiration                   *time.Time                 `json:"Expiration,omitempty"`
	HITGroupID                   *string                    `json:"HITGroupId,omitempty"`
	HITID                        *string                    `json:"HITId,omitempty"`
	HITLayoutID                  *string                    `json:"HITLayoutId,omitempty"`
	HITReviewStatus              *HitReviewStatusEnum       `json:"HITReviewStatus,omitempty"`
	HITStatus                    *HitStatusEnum             `json:"HITStatus,omitempty"`
	HITTypeID                    *string                    `json:"HITTypeId,omitempty"`
	Keywords                     *string                    `json:"Keywords,omitempty"`
	MaxAssignments               *int64                     `json:"MaxAssignments,omitempty"`
	NumberOfAssignmentsAvailable *int64                     `json:"NumberOfAssignmentsAvailable,omitempty"`
	NumberOfAssignmentsCompleted *int64                     `json:"NumberOfAssignmentsCompleted,omitempty"`
	NumberOfAssignmentsPending   *int64                     `json:"NumberOfAssignmentsPending,omitempty"`
	QualificationRequirements    []QualificationRequirement `json:"QualificationRequirements,omitempty"`
	Question                     *string                    `json:"Question,omitempty"`
	RequesterAnnotation          *string                    `json:"RequesterAnnotation,omitempty"`
	Reward                       *string                    `json:"Reward,omitempty"`
	Title                        *string                    `json:"Title,omitempty"`
}
