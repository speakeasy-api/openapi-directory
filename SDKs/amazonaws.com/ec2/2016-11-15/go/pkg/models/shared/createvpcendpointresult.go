package shared

// CreateVpcEndpointResultVpcEndpointLastError
// The last error that occurred for VPC endpoint.
type CreateVpcEndpointResultVpcEndpointLastError struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

// CreateVpcEndpointResultVpcEndpoint
// Information about the endpoint.
type CreateVpcEndpointResultVpcEndpoint struct {
	CreationTimestamp   map[string]interface{}
	DNSEntries          map[string]interface{}
	Groups              map[string]interface{}
	LastError           *CreateVpcEndpointResultVpcEndpointLastError
	NetworkInterfaceIds map[string]interface{}
	OwnerID             map[string]interface{}
	PolicyDocument      map[string]interface{}
	PrivateDNSEnabled   map[string]interface{}
	RequesterManaged    map[string]interface{}
	RouteTableIds       map[string]interface{}
	ServiceName         map[string]interface{}
	State               map[string]interface{}
	SubnetIds           map[string]interface{}
	Tags                map[string]interface{}
	VpcEndpointID       map[string]interface{}
	VpcEndpointType     map[string]interface{}
	VpcID               map[string]interface{}
}

// CreateVpcEndpointResult
// Contains the output of CreateVpcEndpoint.
type CreateVpcEndpointResult struct {
	ClientToken map[string]interface{}
	VpcEndpoint *CreateVpcEndpointResultVpcEndpoint
}
