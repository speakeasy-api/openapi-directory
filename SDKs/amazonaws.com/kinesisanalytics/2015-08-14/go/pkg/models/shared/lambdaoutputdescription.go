package shared

// LambdaOutputDescription
// For an application output, describes the AWS Lambda function configured as its destination.
type LambdaOutputDescription struct {
	ResourceARN *string `json:"ResourceARN,omitempty"`
	RoleARN     *string `json:"RoleARN,omitempty"`
}
