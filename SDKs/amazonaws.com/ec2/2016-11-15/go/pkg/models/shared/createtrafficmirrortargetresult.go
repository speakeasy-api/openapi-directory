package shared

// CreateTrafficMirrorTargetResultTrafficMirrorTarget
// Information about the Traffic Mirror target.
type CreateTrafficMirrorTargetResultTrafficMirrorTarget struct {
	Description            map[string]interface{}
	NetworkInterfaceID     map[string]interface{}
	NetworkLoadBalancerArn map[string]interface{}
	OwnerID                map[string]interface{}
	Tags                   map[string]interface{}
	TrafficMirrorTargetID  map[string]interface{}
	Type                   map[string]interface{}
}

type CreateTrafficMirrorTargetResult struct {
	ClientToken         map[string]interface{}
	TrafficMirrorTarget *CreateTrafficMirrorTargetResultTrafficMirrorTarget
}
