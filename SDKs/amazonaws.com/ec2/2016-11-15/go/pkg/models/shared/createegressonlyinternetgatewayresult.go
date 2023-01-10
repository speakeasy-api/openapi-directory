package shared

// CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway
// Information about the egress-only internet gateway.
type CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway struct {
	Attachments                 map[string]interface{}
	EgressOnlyInternetGatewayID map[string]interface{}
	Tags                        map[string]interface{}
}

type CreateEgressOnlyInternetGatewayResult struct {
	ClientToken               map[string]interface{}
	EgressOnlyInternetGateway *CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway
}
