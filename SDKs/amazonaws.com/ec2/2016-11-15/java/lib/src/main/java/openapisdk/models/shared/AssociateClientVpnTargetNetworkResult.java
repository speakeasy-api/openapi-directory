package openapisdk.models.shared;



public class AssociateClientVpnTargetNetworkResult {
    public java.util.Map<String, Object> associationId;
    public AssociateClientVpnTargetNetworkResult withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public AssociateClientVpnTargetNetworkResultStatus status;
    public AssociateClientVpnTargetNetworkResult withStatus(AssociateClientVpnTargetNetworkResultStatus status) {
        this.status = status;
        return this;
    }
}