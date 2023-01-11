package openapisdk.models.shared;



/**
 * CreateLocalGatewayRouteResultRoute
 * Information about the route.
**/
public class CreateLocalGatewayRouteResultRoute {
    public java.util.Map<String, Object> destinationCidrBlock;
    public CreateLocalGatewayRouteResultRoute withDestinationCidrBlock(java.util.Map<String, Object> destinationCidrBlock) {
        this.destinationCidrBlock = destinationCidrBlock;
        return this;
    }
    public java.util.Map<String, Object> localGatewayRouteTableArn;
    public CreateLocalGatewayRouteResultRoute withLocalGatewayRouteTableArn(java.util.Map<String, Object> localGatewayRouteTableArn) {
        this.localGatewayRouteTableArn = localGatewayRouteTableArn;
        return this;
    }
    public java.util.Map<String, Object> localGatewayRouteTableId;
    public CreateLocalGatewayRouteResultRoute withLocalGatewayRouteTableId(java.util.Map<String, Object> localGatewayRouteTableId) {
        this.localGatewayRouteTableId = localGatewayRouteTableId;
        return this;
    }
    public java.util.Map<String, Object> localGatewayVirtualInterfaceGroupId;
    public CreateLocalGatewayRouteResultRoute withLocalGatewayVirtualInterfaceGroupId(java.util.Map<String, Object> localGatewayVirtualInterfaceGroupId) {
        this.localGatewayVirtualInterfaceGroupId = localGatewayVirtualInterfaceGroupId;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateLocalGatewayRouteResultRoute withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateLocalGatewayRouteResultRoute withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> type;
    public CreateLocalGatewayRouteResultRoute withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}