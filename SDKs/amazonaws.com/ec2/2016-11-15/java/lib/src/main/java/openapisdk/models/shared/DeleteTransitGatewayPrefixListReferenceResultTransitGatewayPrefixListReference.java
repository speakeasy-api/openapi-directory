package openapisdk.models.shared;



/**
 * DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
 * Information about the deleted prefix list reference.
**/
public class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference {
    public java.util.Map<String, Object> blackhole;
    public DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withBlackhole(java.util.Map<String, Object> blackhole) {
        this.blackhole = blackhole;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> prefixListOwnerId;
    public DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withPrefixListOwnerId(java.util.Map<String, Object> prefixListOwnerId) {
        this.prefixListOwnerId = prefixListOwnerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment transitGatewayAttachment;
    public DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withTransitGatewayAttachment(DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment transitGatewayAttachment) {
        this.transitGatewayAttachment = transitGatewayAttachment;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayRouteTableId;
    public DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withTransitGatewayRouteTableId(java.util.Map<String, Object> transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
}