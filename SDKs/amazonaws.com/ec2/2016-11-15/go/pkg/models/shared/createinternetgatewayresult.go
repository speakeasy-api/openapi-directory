package shared

// CreateInternetGatewayResultInternetGateway
// Information about the internet gateway.
type CreateInternetGatewayResultInternetGateway struct {
	Attachments       map[string]interface{}
	InternetGatewayID map[string]interface{}
	OwnerID           map[string]interface{}
	Tags              map[string]interface{}
}

type CreateInternetGatewayResult struct {
	InternetGateway *CreateInternetGatewayResultInternetGateway
}
