package openapisdk.models.shared;



/**
 * AssociateTrunkInterfaceResultInterfaceAssociation
 * Information about the association between the trunk network interface and branch network interface.
**/
public class AssociateTrunkInterfaceResultInterfaceAssociation {
    public java.util.Map<String, Object> associationId;
    public AssociateTrunkInterfaceResultInterfaceAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public java.util.Map<String, Object> branchInterfaceId;
    public AssociateTrunkInterfaceResultInterfaceAssociation withBranchInterfaceId(java.util.Map<String, Object> branchInterfaceId) {
        this.branchInterfaceId = branchInterfaceId;
        return this;
    }
    public java.util.Map<String, Object> greKey;
    public AssociateTrunkInterfaceResultInterfaceAssociation withGreKey(java.util.Map<String, Object> greKey) {
        this.greKey = greKey;
        return this;
    }
    public java.util.Map<String, Object> interfaceProtocol;
    public AssociateTrunkInterfaceResultInterfaceAssociation withInterfaceProtocol(java.util.Map<String, Object> interfaceProtocol) {
        this.interfaceProtocol = interfaceProtocol;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public AssociateTrunkInterfaceResultInterfaceAssociation withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> trunkInterfaceId;
    public AssociateTrunkInterfaceResultInterfaceAssociation withTrunkInterfaceId(java.util.Map<String, Object> trunkInterfaceId) {
        this.trunkInterfaceId = trunkInterfaceId;
        return this;
    }
    public java.util.Map<String, Object> vlanId;
    public AssociateTrunkInterfaceResultInterfaceAssociation withVlanId(java.util.Map<String, Object> vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}