package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2NetworkAclAssociation
 * An association between the network ACL and a subnet.
**/
public class AwsEc2NetworkAclAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkAclAssociationId")
    public String networkAclAssociationId;
    public AwsEc2NetworkAclAssociation withNetworkAclAssociationId(String networkAclAssociationId) {
        this.networkAclAssociationId = networkAclAssociationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkAclId")
    public String networkAclId;
    public AwsEc2NetworkAclAssociation withNetworkAclId(String networkAclId) {
        this.networkAclId = networkAclId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public AwsEc2NetworkAclAssociation withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}