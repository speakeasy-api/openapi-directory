package shared

// CreateTrafficMirrorSessionResultTrafficMirrorSession
// Information about the Traffic Mirror session.
type CreateTrafficMirrorSessionResultTrafficMirrorSession struct {
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

type CreateTrafficMirrorSessionResult struct {
	ClientToken          map[string]interface{}
	TrafficMirrorSession *CreateTrafficMirrorSessionResultTrafficMirrorSession
}
