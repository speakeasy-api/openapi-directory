package shared

// FunctionList
// A list of CloudFront functions.
type FunctionList struct {
	Items      []FunctionSummaryList
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
