package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcSecurityGroupMembership
 * Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.
**/
public class VpcSecurityGroupMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public VpcSecurityGroupMembership withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSecurityGroupId")
    public String vpcSecurityGroupId;
    public VpcSecurityGroupMembership withVpcSecurityGroupId(String vpcSecurityGroupId) {
        this.vpcSecurityGroupId = vpcSecurityGroupId;
        return this;
    }
}