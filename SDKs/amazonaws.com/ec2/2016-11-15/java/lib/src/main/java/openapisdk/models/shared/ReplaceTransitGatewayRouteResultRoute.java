package openapisdk.models.shared;



/**
 * ReplaceTransitGatewayRouteResultRoute
 * Information about the modified route.
**/
public class ReplaceTransitGatewayRouteResultRoute {
    public java.util.Map<String, Object> destinationCidrBlock;
    public ReplaceTransitGatewayRouteResultRoute withDestinationCidrBlock(java.util.Map<String, Object> destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public ReplaceTransitGatewayRouteResultRoute withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ReplaceTransitGatewayRouteResultRoute withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachments;
    public ReplaceTransitGatewayRouteResultRoute withTransitGatewayAttachments(java.util.Map<String, Object> transitGatewayAttachments) {
        this.transitGatewayAttachments = transitGatewayAttachments;
        return this;
    }
    public java.util.Map<String, Object> type;
    public ReplaceTransitGatewayRouteResultRoute withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}