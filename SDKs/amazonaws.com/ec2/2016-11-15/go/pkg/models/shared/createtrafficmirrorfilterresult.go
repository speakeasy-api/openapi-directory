package shared

// CreateTrafficMirrorFilterResultTrafficMirrorFilter
// Information about the Traffic Mirror filter.
type CreateTrafficMirrorFilterResultTrafficMirrorFilter struct {
	Description           map[string]interface{}
	EgressFilterRules     map[string]interface{}
	IngressFilterRules    map[string]interface{}
	NetworkServices       map[string]interface{}
	Tags                  map[string]interface{}
	TrafficMirrorFilterID map[string]interface{}
}

type CreateTrafficMirrorFilterResult struct {
	ClientToken         map[string]interface{}
	TrafficMirrorFilter *CreateTrafficMirrorFilterResultTrafficMirrorFilter
}
