package shared

// Resource1
//
//	A system asset that is evaluated in an Audit Manager assessment.
type Resource1 struct {
	Arn   *string `json:"arn,omitempty"`
	Value *string `json:"value,omitempty"`
}
