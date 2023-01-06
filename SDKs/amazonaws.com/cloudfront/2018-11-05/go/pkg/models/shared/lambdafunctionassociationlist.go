package shared

// LambdaFunctionAssociationList
// A complex type that contains a Lambda function association.
type LambdaFunctionAssociationList struct {
	EventType         EventTypeEnum
	IncludeBody       *bool
	LambdaFunctionARN string
}
