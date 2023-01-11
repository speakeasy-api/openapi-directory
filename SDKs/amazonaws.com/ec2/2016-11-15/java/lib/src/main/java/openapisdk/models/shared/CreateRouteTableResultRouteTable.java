package openapisdk.models.shared;



/**
 * CreateRouteTableResultRouteTable
 * Information about the route table.
**/
public class CreateRouteTableResultRouteTable {
    public java.util.Map<String, Object> associations;
    public CreateRouteTableResultRouteTable withAssociations(java.util.Map<String, Object> associations) {
        this.associations = associations;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateRouteTableResultRouteTable withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> propagatingVgws;
    public CreateRouteTableResultRouteTable withPropagatingVgws(java.util.Map<String, Object> propagatingVgws) {
        this.propagatingVgws = propagatingVgws;
        return this;
    }
    public java.util.Map<String, Object> routeTableId;
    public CreateRouteTableResultRouteTable withRouteTableId(java.util.Map<String, Object> routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    public java.util.Map<String, Object> routes;
    public CreateRouteTableResultRouteTable withRoutes(java.util.Map<String, Object> routes) {
        this.routes = routes;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateRouteTableResultRouteTable withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateRouteTableResultRouteTable withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}