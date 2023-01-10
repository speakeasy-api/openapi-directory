package shared

// CreateNetworkInsightsPathResultNetworkInsightsPath
// Information about the path.
type CreateNetworkInsightsPathResultNetworkInsightsPath struct {
	CreatedDate            map[string]interface{}
	Destination            map[string]interface{}
	DestinationIP          map[string]interface{}
	DestinationPort        map[string]interface{}
	NetworkInsightsPathArn map[string]interface{}
	NetworkInsightsPathID  map[string]interface{}
	Protocol               map[string]interface{}
	Source                 map[string]interface{}
	SourceIP               map[string]interface{}
	Tags                   map[string]interface{}
}

type CreateNetworkInsightsPathResult struct {
	NetworkInsightsPath *CreateNetworkInsightsPathResultNetworkInsightsPath
}
