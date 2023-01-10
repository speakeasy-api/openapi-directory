package shared

// DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
// The fault codes for the Spot Instance request, if any.
type DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription
// The Spot Instance data feed subscription.
type DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription struct {
	Bucket  map[string]interface{}
	Fault   *DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
	OwnerID map[string]interface{}
	Prefix  map[string]interface{}
	State   map[string]interface{}
}

// DescribeSpotDatafeedSubscriptionResult
// Contains the output of DescribeSpotDatafeedSubscription.
type DescribeSpotDatafeedSubscriptionResult struct {
	SpotDatafeedSubscription *DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription
}
