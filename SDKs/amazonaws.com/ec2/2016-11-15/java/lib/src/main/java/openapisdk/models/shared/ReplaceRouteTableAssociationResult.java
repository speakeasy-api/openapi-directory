package openapisdk.models.shared;



public class ReplaceRouteTableAssociationResult {
    public ReplaceRouteTableAssociationResultAssociationState associationState;
    public ReplaceRouteTableAssociationResult withAssociationState(ReplaceRouteTableAssociationResultAssociationState associationState) {
        this.associationState = associationState;
        return this;
    }
    public java.util.Map<String, Object> newAssociationId;
    public ReplaceRouteTableAssociationResult withNewAssociationId(java.util.Map<String, Object> newAssociationId) {
        this.newAssociationId = newAssociationId;
        return this;
    }
}