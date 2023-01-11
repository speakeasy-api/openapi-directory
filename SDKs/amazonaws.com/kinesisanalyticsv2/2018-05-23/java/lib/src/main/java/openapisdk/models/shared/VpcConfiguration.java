package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VpcConfiguration
 * Describes the parameters of a VPC used by the application.
**/
public class VpcConfiguration {
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public VpcConfiguration withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public VpcConfiguration withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
}