package shared

// DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
// Information about the transit gateway attachment.
type DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment struct {
	ResourceID                 map[string]interface{}
	ResourceType               map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
}

// DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
// Information about the deleted prefix list reference.
type DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference struct {
	Blackhole                  map[string]interface{}
	PrefixListID               map[string]interface{}
	PrefixListOwnerID          map[string]interface{}
	State                      map[string]interface{}
	TransitGatewayAttachment   *DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
	TransitGatewayRouteTableID map[string]interface{}
}

type DeleteTransitGatewayPrefixListReferenceResult struct {
	TransitGatewayPrefixListReference *DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
}
