package shared

// ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter
// The Traffic Mirror filter that the network service is associated with.
type ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter struct {
	Description           map[string]interface{}
	EgressFilterRules     map[string]interface{}
	IngressFilterRules    map[string]interface{}
	NetworkServices       map[string]interface{}
	Tags                  map[string]interface{}
	TrafficMirrorFilterID map[string]interface{}
}

type ModifyTrafficMirrorFilterNetworkServicesResult struct {
	TrafficMirrorFilter *ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter
}
