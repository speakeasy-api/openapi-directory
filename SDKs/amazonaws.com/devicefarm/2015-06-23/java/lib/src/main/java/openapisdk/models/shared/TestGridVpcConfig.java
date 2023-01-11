package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TestGridVpcConfig
 * The VPC security groups and subnets that are attached to a project.
**/
public class TestGridVpcConfig {
    @JsonProperty("securityGroupIds")
    public String[] securityGroupIds;
    public TestGridVpcConfig withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonProperty("subnetIds")
    public String[] subnetIds;
    public TestGridVpcConfig withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonProperty("vpcId")
    public String vpcId;
    public TestGridVpcConfig withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}