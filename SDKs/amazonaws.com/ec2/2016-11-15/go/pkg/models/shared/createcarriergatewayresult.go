package shared

// CreateCarrierGatewayResultCarrierGateway
// Information about the carrier gateway.
type CreateCarrierGatewayResultCarrierGateway struct {
	CarrierGatewayID map[string]interface{}
	OwnerID          map[string]interface{}
	State            map[string]interface{}
	Tags             map[string]interface{}
	VpcID            map[string]interface{}
}

type CreateCarrierGatewayResult struct {
	CarrierGateway *CreateCarrierGatewayResultCarrierGateway
}
