package openapisdk.models.shared;



/**
 * CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
 * Information about the prefix list reference.
**/
public class CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference {
    public java.util.Map<String, Object> blackhole;
    public CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withBlackhole(java.util.Map<String, Object> blackhole) {
        this.blackhole = blackhole;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> prefixListOwnerId;
    public CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withPrefixListOwnerId(java.util.Map<String, Object> prefixListOwnerId) {
        this.prefixListOwnerId = prefixListOwnerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment transitGatewayAttachment;
    public CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withTransitGatewayAttachment(CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment transitGatewayAttachment) {
        this.transitGatewayAttachment = transitGatewayAttachment;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayRouteTableId;
    public CreateTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withTransitGatewayRouteTableId(java.util.Map<String, Object> transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
}