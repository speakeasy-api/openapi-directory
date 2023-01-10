package shared

// VpcEndpoint
// The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
type VpcEndpoint struct {
	NetworkInterfaces []NetworkInterfaceList
	VpcEndpointID     *string
	VpcID             *string
}
