package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VpcConfigurationDescription
 * Describes the parameters of a VPC used by the application.
**/
public class VpcConfigurationDescription {
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
    @JsonProperty("VpcConfigurationId")
    public String vpcConfigurationId;
    public VpcConfigurationDescription withVpcConfigurationId(String vpcConfigurationId) {
        this.vpcConfigurationId = vpcConfigurationId;
        return this;
    }
    @JsonProperty("VpcId")
    public String vpcId;
    public VpcConfigurationDescription withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}