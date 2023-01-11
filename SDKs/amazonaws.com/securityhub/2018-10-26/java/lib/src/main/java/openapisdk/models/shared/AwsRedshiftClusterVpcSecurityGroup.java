package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterVpcSecurityGroup
 * A VPC security group that the cluster belongs to, if the cluster is in a VPC.
**/
public class AwsRedshiftClusterVpcSecurityGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsRedshiftClusterVpcSecurityGroup withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcSecurityGroupId")
    public String vpcSecurityGroupId;
    public AwsRedshiftClusterVpcSecurityGroup withVpcSecurityGroupId(String vpcSecurityGroupId) {
        this.vpcSecurityGroupId = vpcSecurityGroupId;
        return this;
    }
}