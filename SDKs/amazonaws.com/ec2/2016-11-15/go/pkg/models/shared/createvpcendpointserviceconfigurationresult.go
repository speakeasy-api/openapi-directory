package shared

// CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDNSNameConfiguration
// Information about the endpoint service private DNS name configuration.
type CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDNSNameConfiguration struct {
	Name  map[string]interface{}
	State map[string]interface{}
	Type  map[string]interface{}
	Value map[string]interface{}
}

// CreateVpcEndpointServiceConfigurationResultServiceConfiguration
// Information about the service configuration.
type CreateVpcEndpointServiceConfigurationResultServiceConfiguration struct {
	AcceptanceRequired          map[string]interface{}
	AvailabilityZones           map[string]interface{}
	BaseEndpointDNSNames        map[string]interface{}
	GatewayLoadBalancerArns     map[string]interface{}
	ManagesVpcEndpoints         map[string]interface{}
	NetworkLoadBalancerArns     map[string]interface{}
	PrivateDNSName              map[string]interface{}
	PrivateDNSNameConfiguration *CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDNSNameConfiguration
	ServiceID                   map[string]interface{}
	ServiceName                 map[string]interface{}
	ServiceState                map[string]interface{}
	ServiceType                 map[string]interface{}
	Tags                        map[string]interface{}
}

type CreateVpcEndpointServiceConfigurationResult struct {
	ClientToken          map[string]interface{}
	ServiceConfiguration *CreateVpcEndpointServiceConfigurationResultServiceConfiguration
}
