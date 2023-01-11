package openapisdk.models.shared;



/**
 * CreateNetworkAclResultNetworkAcl
 * Information about the network ACL.
**/
public class CreateNetworkAclResultNetworkAcl {
    public java.util.Map<String, Object> associations;
    public CreateNetworkAclResultNetworkAcl withAssociations(java.util.Map<String, Object> associations) {
        this.associations = associations;
        return this;
    }
    public java.util.Map<String, Object> entries;
    public CreateNetworkAclResultNetworkAcl withEntries(java.util.Map<String, Object> entries) {
        this.entries = entries;
        return this;
    }
    public java.util.Map<String, Object> isDefault;
    public CreateNetworkAclResultNetworkAcl withIsDefault(java.util.Map<String, Object> isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    public java.util.Map<String, Object> networkAclId;
    public CreateNetworkAclResultNetworkAcl withNetworkAclId(java.util.Map<String, Object> networkAclId) {
        this.networkAclId = networkAclId;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateNetworkAclResultNetworkAcl withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateNetworkAclResultNetworkAcl withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateNetworkAclResultNetworkAcl withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}