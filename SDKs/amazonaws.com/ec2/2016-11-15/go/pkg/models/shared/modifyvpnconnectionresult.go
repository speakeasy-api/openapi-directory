package shared

// ModifyVpnConnectionResultVpnConnectionOptions
// The VPN connection options.
type ModifyVpnConnectionResultVpnConnectionOptions struct {
	EnableAcceleration    map[string]interface{}
	LocalIpv4NetworkCidr  map[string]interface{}
	LocalIpv6NetworkCidr  map[string]interface{}
	RemoteIpv4NetworkCidr map[string]interface{}
	RemoteIpv6NetworkCidr map[string]interface{}
	StaticRoutesOnly      map[string]interface{}
	TunnelInsideIPVersion map[string]interface{}
	TunnelOptions         map[string]interface{}
}

// ModifyVpnConnectionResultVpnConnection
// Describes a VPN connection.
type ModifyVpnConnectionResultVpnConnection struct {
	Category                     map[string]interface{}
	CustomerGatewayConfiguration map[string]interface{}
	CustomerGatewayID            map[string]interface{}
	Options                      *ModifyVpnConnectionResultVpnConnectionOptions
	Routes                       map[string]interface{}
	State                        map[string]interface{}
	Tags                         map[string]interface{}
	TransitGatewayID             map[string]interface{}
	Type                         map[string]interface{}
	VgwTelemetry                 map[string]interface{}
	VpnConnectionID              map[string]interface{}
	VpnGatewayID                 map[string]interface{}
}

type ModifyVpnConnectionResult struct {
	VpnConnection *ModifyVpnConnectionResultVpnConnection
}
