package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VpcConfigurationDescription
 * The details of the VPC of the Amazon ES destination.
**/
public class VpcConfigurationDescription {
    @JsonProperty("RoleARN")
    public String roleARN;
    public VpcConfigurationDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public VpcConfigurationDescription withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public VpcConfigurationDescription withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonProperty("VpcId")
    public String vpcId;
    public VpcConfigurationDescription withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}