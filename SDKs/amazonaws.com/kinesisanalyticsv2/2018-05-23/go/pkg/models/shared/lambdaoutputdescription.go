package shared

// LambdaOutputDescription
// For a SQL-based Kinesis Data Analytics application's output, describes the AWS Lambda function that is configured as its destination.
type LambdaOutputDescription struct {
	ResourceARN string  `json:"ResourceARN"`
	RoleARN     *string `json:"RoleARN,omitempty"`
}
