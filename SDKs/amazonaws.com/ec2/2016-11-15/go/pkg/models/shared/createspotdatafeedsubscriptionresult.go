package shared

// CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
// The fault codes for the Spot Instance request, if any.
type CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription
// The Spot Instance data feed subscription.
type CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription struct {
	Bucket  map[string]interface{}
	Fault   *CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
	OwnerID map[string]interface{}
	Prefix  map[string]interface{}
	State   map[string]interface{}
}

// CreateSpotDatafeedSubscriptionResult
// Contains the output of CreateSpotDatafeedSubscription.
type CreateSpotDatafeedSubscriptionResult struct {
	SpotDatafeedSubscription *CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription
}
