package shared

// CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
// Information about the transit gateway attachment.
type CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment struct {
	ResourceID                 map[string]interface{}
	ResourceType               map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
}

// CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
// Information about the prefix list reference.
type CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference struct {
	Blackhole                  map[string]interface{}
	PrefixListID               map[string]interface{}
	PrefixListOwnerID          map[string]interface{}
	State                      map[string]interface{}
	TransitGatewayAttachment   *CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
	TransitGatewayRouteTableID map[string]interface{}
}

type CreateTransitGatewayPrefixListReferenceResult struct {
	TransitGatewayPrefixListReference *CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
}
