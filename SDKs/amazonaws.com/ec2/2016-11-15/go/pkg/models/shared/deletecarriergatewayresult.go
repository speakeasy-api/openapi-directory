package shared

// DeleteCarrierGatewayResultCarrierGateway
// Information about the carrier gateway.
type DeleteCarrierGatewayResultCarrierGateway struct {
	CarrierGatewayID map[string]interface{}
	OwnerID          map[string]interface{}
	State            map[string]interface{}
	Tags             map[string]interface{}
	VpcID            map[string]interface{}
}

type DeleteCarrierGatewayResult struct {
	CarrierGateway *DeleteCarrierGatewayResultCarrierGateway
}
