package shared

// FunctionAssociationList
// A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
type FunctionAssociationList struct {
	EventType   EventTypeEnum
	FunctionARN string
}
