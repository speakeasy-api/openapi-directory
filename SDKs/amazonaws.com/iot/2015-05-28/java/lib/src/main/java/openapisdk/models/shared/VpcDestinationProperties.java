package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcDestinationProperties
 * The properties of a virtual private cloud (VPC) destination.
**/
public class VpcDestinationProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public VpcDestinationProperties withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public String[] securityGroups;
    public VpcDestinationProperties withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetIds")
    public String[] subnetIds;
    public VpcDestinationProperties withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcId")
    public String vpcId;
    public VpcDestinationProperties withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}