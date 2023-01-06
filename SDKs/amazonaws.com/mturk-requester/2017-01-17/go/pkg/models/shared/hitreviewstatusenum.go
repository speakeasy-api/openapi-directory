package shared

type HitReviewStatusEnum string

const (
	HITReviewStatusEnumNotReviewed           HitReviewStatusEnum = "NotReviewed"
	HITReviewStatusEnumMarkedForReview       HitReviewStatusEnum = "MarkedForReview"
	HITReviewStatusEnumReviewedAppropriate   HitReviewStatusEnum = "ReviewedAppropriate"
	HITReviewStatusEnumReviewedInappropriate HitReviewStatusEnum = "ReviewedInappropriate"
)
