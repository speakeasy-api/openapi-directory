package shared

// ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
// Information about the transit gateway attachment.
type ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment struct {
	ResourceID                 map[string]interface{}
	ResourceType               map[string]interface{}
	TransitGatewayAttachmentID map[string]interface{}
}

// ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
// Information about the prefix list reference.
type ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference struct {
	Blackhole                  map[string]interface{}
	PrefixListID               map[string]interface{}
	PrefixListOwnerID          map[string]interface{}
	State                      map[string]interface{}
	TransitGatewayAttachment   *ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
	TransitGatewayRouteTableID map[string]interface{}
}

type ModifyTransitGatewayPrefixListReferenceResult struct {
	TransitGatewayPrefixListReference *ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
}
