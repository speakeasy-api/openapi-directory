package shared

// RouteData1
// An object that represents a route returned by a describe operation.
type RouteData1 struct {
	MeshName          string           `json:"meshName"`
	Metadata          ResourceMetadata `json:"metadata"`
	RouteName         string           `json:"routeName"`
	Spec              RouteSpec1       `json:"spec"`
	Status            RouteStatus      `json:"status"`
	VirtualRouterName string           `json:"virtualRouterName"`
}
