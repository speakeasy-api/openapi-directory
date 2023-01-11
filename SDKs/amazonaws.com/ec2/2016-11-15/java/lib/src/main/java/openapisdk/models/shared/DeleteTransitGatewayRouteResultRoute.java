package openapisdk.models.shared;



/**
 * DeleteTransitGatewayRouteResultRoute
 * Information about the route.
**/
public class DeleteTransitGatewayRouteResultRoute {
    public java.util.Map<String, Object> destinationCidrBlock;
    public DeleteTransitGatewayRouteResultRoute withDestinationCidrBlock(java.util.Map<String, Object> destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public DeleteTransitGatewayRouteResultRoute withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteTransitGatewayRouteResultRoute withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachments;
    public DeleteTransitGatewayRouteResultRoute withTransitGatewayAttachments(java.util.Map<String, Object> transitGatewayAttachments) {
        this.transitGatewayAttachments = transitGatewayAttachments;
        return this;
    }
    public java.util.Map<String, Object> type;
    public DeleteTransitGatewayRouteResultRoute withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}