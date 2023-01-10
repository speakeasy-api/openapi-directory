package shared

// CreateCustomerGatewayResultCustomerGateway
// Information about the customer gateway.
type CreateCustomerGatewayResultCustomerGateway struct {
	BgpAsn            map[string]interface{}
	CertificateArn    map[string]interface{}
	CustomerGatewayID map[string]interface{}
	DeviceName        map[string]interface{}
	IPAddress         map[string]interface{}
	State             map[string]interface{}
	Tags              map[string]interface{}
	Type              map[string]interface{}
}

// CreateCustomerGatewayResult
// Contains the output of CreateCustomerGateway.
type CreateCustomerGatewayResult struct {
	CustomerGateway *CreateCustomerGatewayResultCustomerGateway
}
