package openapisdk.models.shared;



/**
 * ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
 * Information about the prefix list reference.
**/
public class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference {
    public java.util.Map<String, Object> blackhole;
    public ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withBlackhole(java.util.Map<String, Object> blackhole) {
        this.blackhole = blackhole;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> prefixListOwnerId;
    public ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withPrefixListOwnerId(java.util.Map<String, Object> prefixListOwnerId) {
        this.prefixListOwnerId = prefixListOwnerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment transitGatewayAttachment;
    public ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withTransitGatewayAttachment(ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment transitGatewayAttachment) {
        this.transitGatewayAttachment = transitGatewayAttachment;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayRouteTableId;
    public ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference withTransitGatewayRouteTableId(java.util.Map<String, Object> transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
}