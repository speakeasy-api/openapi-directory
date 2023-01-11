package openapisdk.models.shared;



public class AssociateRouteTableResult {
    public java.util.Map<String, Object> associationId;
    public AssociateRouteTableResult withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public AssociateRouteTableResultAssociationState associationState;
    public AssociateRouteTableResult withAssociationState(AssociateRouteTableResultAssociationState associationState) {
        this.associationState = associationState;
        return this;
    }
}