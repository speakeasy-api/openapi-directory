package openapisdk.models.shared;



public class DisassociateClientVpnTargetNetworkResult {
    public java.util.Map<String, Object> associationId;
    public DisassociateClientVpnTargetNetworkResult withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public DisassociateClientVpnTargetNetworkResultStatus status;
    public DisassociateClientVpnTargetNetworkResult withStatus(DisassociateClientVpnTargetNetworkResultStatus status) {
        this.status = status;
        return this;
    }
}