package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2NetworkAclDetails
 * Contains details about an EC2 network access control list (ACL).
**/
public class AwsEc2NetworkAclDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Associations")
    public AwsEc2NetworkAclAssociation[] associations;
    public AwsEc2NetworkAclDetails withAssociations(AwsEc2NetworkAclAssociation[] associations) {
        this.associations = associations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Entries")
    public AwsEc2NetworkAclEntry[] entries;
    public AwsEc2NetworkAclDetails withEntries(AwsEc2NetworkAclEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsDefault")
    public Boolean isDefault;
    public AwsEc2NetworkAclDetails withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkAclId")
    public String networkAclId;
    public AwsEc2NetworkAclDetails withNetworkAclId(String networkAclId) {
        this.networkAclId = networkAclId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerId")
    public String ownerId;
    public AwsEc2NetworkAclDetails withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public AwsEc2NetworkAclDetails withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}