package openapisdk.models.shared;



/**
 * DeleteLocalGatewayRouteResultRoute
 * Information about the route.
**/
public class DeleteLocalGatewayRouteResultRoute {
    public java.util.Map<String, Object> destinationCidrBlock;
    public DeleteLocalGatewayRouteResultRoute withDestinationCidrBlock(java.util.Map<String, Object> destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    public java.util.Map<String, Object> localGatewayRouteTableArn;
    public DeleteLocalGatewayRouteResultRoute withLocalGatewayRouteTableArn(java.util.Map<String, Object> localGatewayRouteTableArn) {
        this.localGatewayRouteTableArn = localGatewayRouteTableArn;
        return this;
    }
    public java.util.Map<String, Object> localGatewayRouteTableId;
    public DeleteLocalGatewayRouteResultRoute withLocalGatewayRouteTableId(java.util.Map<String, Object> localGatewayRouteTableId) {
        this.localGatewayRouteTableId = localGatewayRouteTableId;
        return this;
    }
    public java.util.Map<String, Object> localGatewayVirtualInterfaceGroupId;
    public DeleteLocalGatewayRouteResultRoute withLocalGatewayVirtualInterfaceGroupId(java.util.Map<String, Object> localGatewayVirtualInterfaceGroupId) {
        this.localGatewayVirtualInterfaceGroupId = localGatewayVirtualInterfaceGroupId;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public DeleteLocalGatewayRouteResultRoute withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteLocalGatewayRouteResultRoute withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> type;
    public DeleteLocalGatewayRouteResultRoute withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}