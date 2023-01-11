package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcDestinationConfiguration
 * The configuration information for a virtual private cloud (VPC) destination.
**/
public class VpcDestinationConfiguration {
    @JsonProperty("roleArn")
    public String roleArn;
    public VpcDestinationConfiguration withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public String[] securityGroups;
    public VpcDestinationConfiguration withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonProperty("subnetIds")
    public String[] subnetIds;
    public VpcDestinationConfiguration withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonProperty("vpcId")
    public String vpcId;
    public VpcDestinationConfiguration withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}