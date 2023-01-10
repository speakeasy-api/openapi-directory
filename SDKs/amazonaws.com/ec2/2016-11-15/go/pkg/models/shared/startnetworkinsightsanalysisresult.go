package shared

// StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis
// Information about the network insights analysis.
type StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis struct {
	AlternatePathHints         map[string]interface{}
	Explanations               map[string]interface{}
	FilterInArns               map[string]interface{}
	ForwardPathComponents      map[string]interface{}
	NetworkInsightsAnalysisArn map[string]interface{}
	NetworkInsightsAnalysisID  map[string]interface{}
	NetworkInsightsPathID      map[string]interface{}
	NetworkPathFound           map[string]interface{}
	ReturnPathComponents       map[string]interface{}
	StartDate                  map[string]interface{}
	Status                     map[string]interface{}
	StatusMessage              map[string]interface{}
	Tags                       map[string]interface{}
}

type StartNetworkInsightsAnalysisResult struct {
	NetworkInsightsAnalysis *StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis
}
