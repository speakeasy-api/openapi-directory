package shared

// ModifyTrafficMirrorSessionResultTrafficMirrorSession
// Information about the Traffic Mirror session.
type ModifyTrafficMirrorSessionResultTrafficMirrorSession struct {
	Description            map[string]interface{}
	NetworkInterfaceID     map[string]interface{}
	OwnerID                map[string]interface{}
	PacketLength           map[string]interface{}
	SessionNumber          map[string]interface{}
	Tags                   map[string]interface{}
	TrafficMirrorFilterID  map[string]interface{}
	TrafficMirrorSessionID map[string]interface{}
	TrafficMirrorTargetID  map[string]interface{}
	VirtualNetworkID       map[string]interface{}
}

type ModifyTrafficMirrorSessionResult struct {
	TrafficMirrorSession *ModifyTrafficMirrorSessionResultTrafficMirrorSession
}
