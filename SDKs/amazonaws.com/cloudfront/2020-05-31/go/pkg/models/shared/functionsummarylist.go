package shared

// FunctionSummaryList
// Contains configuration information and metadata about a CloudFront function.
type FunctionSummaryList struct {
	FunctionConfig   FunctionConfig
	FunctionMetadata FunctionMetadata
	Name             string
	Status           *string
}
