package shared

// VpcEndpointsList
// The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
type VpcEndpointsList struct {
	NetworkInterfaces []map[string]interface{}
	VpcEndpointID     *string
	VpcID             *string
}
