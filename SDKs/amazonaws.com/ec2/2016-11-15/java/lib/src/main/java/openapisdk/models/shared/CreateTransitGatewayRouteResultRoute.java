package openapisdk.models.shared;



/**
 * CreateTransitGatewayRouteResultRoute
 * Information about the route.
**/
public class CreateTransitGatewayRouteResultRoute {
    public java.util.Map<String, Object> destinationCidrBlock;
    public CreateTransitGatewayRouteResultRoute withDestinationCidrBlock(java.util.Map<String, Object> destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public CreateTransitGatewayRouteResultRoute withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateTransitGatewayRouteResultRoute withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachments;
    public CreateTransitGatewayRouteResultRoute withTransitGatewayAttachments(java.util.Map<String, Object> transitGatewayAttachments) {
        this.transitGatewayAttachments = transitGatewayAttachments;
        return this;
    }
    public java.util.Map<String, Object> type;
    public CreateTransitGatewayRouteResultRoute withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}