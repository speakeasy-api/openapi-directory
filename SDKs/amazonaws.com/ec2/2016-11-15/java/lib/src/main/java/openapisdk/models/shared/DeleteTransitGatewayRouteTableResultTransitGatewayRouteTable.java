package openapisdk.models.shared;



/**
 * DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable
 * Information about the deleted transit gateway route table.
**/
public class DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable {
    public java.util.Map<String, Object> creationTime;
    public DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public java.util.Map<String, Object> defaultAssociationRouteTable;
    public DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable withDefaultAssociationRouteTable(java.util.Map<String, Object> defaultAssociationRouteTable) {
        this.defaultAssociationRouteTable = defaultAssociationRouteTable;
        return this;
    }
    public java.util.Map<String, Object> defaultPropagationRouteTable;
    public DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable withDefaultPropagationRouteTable(java.util.Map<String, Object> defaultPropagationRouteTable) {
        this.defaultPropagationRouteTable = defaultPropagationRouteTable;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayRouteTableId;
    public DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable withTransitGatewayRouteTableId(java.util.Map<String, Object> transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
}