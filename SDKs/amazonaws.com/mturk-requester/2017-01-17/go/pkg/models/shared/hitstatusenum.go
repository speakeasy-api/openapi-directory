package shared

type HitStatusEnum string

const (
	HITStatusEnumAssignable   HitStatusEnum = "Assignable"
	HITStatusEnumUnassignable HitStatusEnum = "Unassignable"
	HITStatusEnumReviewable   HitStatusEnum = "Reviewable"
	HITStatusEnumReviewing    HitStatusEnum = "Reviewing"
	HITStatusEnumDisposed     HitStatusEnum = "Disposed"
)
