package shared

// Endpoint1
// Describes a connection endpoint.
type Endpoint1 struct {
	Address      *string
	Port         *int64
	VpcEndpoints []VpcEndpointsList
}
