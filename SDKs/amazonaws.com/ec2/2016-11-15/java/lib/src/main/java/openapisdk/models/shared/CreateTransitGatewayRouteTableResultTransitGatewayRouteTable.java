package openapisdk.models.shared;



/**
 * CreateTransitGatewayRouteTableResultTransitGatewayRouteTable
 * Information about the transit gateway route table.
**/
public class CreateTransitGatewayRouteTableResultTransitGatewayRouteTable {
    public java.util.Map<String, Object> creationTime;
    public CreateTransitGatewayRouteTableResultTransitGatewayRouteTable withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public java.util.Map<String, Object> defaultAssociationRouteTable;
    public CreateTransitGatewayRouteTableResultTransitGatewayRouteTable withDefaultAssociationRouteTable(java.util.Map<String, Object> defaultAssociationRouteTable) {
        this.defaultAssociationRouteTable = defaultAssociationRouteTable;
        return this;
    }
    public java.util.Map<String, Object> defaultPropagationRouteTable;
    public CreateTransitGatewayRouteTableResultTransitGatewayRouteTable withDefaultPropagationRouteTable(java.util.Map<String, Object> defaultPropagationRouteTable) {
        this.defaultPropagationRouteTable = defaultPropagationRouteTable;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateTransitGatewayRouteTableResultTransitGatewayRouteTable withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateTransitGatewayRouteTableResultTransitGatewayRouteTable withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public CreateTransitGatewayRouteTableResultTransitGatewayRouteTable withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayRouteTableId;
    public CreateTransitGatewayRouteTableResultTransitGatewayRouteTable withTransitGatewayRouteTableId(java.util.Map<String, Object> transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
}