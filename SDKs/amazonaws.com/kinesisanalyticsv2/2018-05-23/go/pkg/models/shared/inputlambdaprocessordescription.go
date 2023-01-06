package shared

// InputLambdaProcessorDescription
// For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream.
type InputLambdaProcessorDescription struct {
	ResourceARN string  `json:"ResourceARN"`
	RoleARN     *string `json:"RoleARN,omitempty"`
}
