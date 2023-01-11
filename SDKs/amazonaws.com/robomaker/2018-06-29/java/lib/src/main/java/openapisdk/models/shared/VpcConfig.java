package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcConfig
 * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
**/
public class VpcConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignPublicIp")
    public Boolean assignPublicIp;
    public VpcConfig withAssignPublicIp(Boolean assignPublicIp) {
        this.assignPublicIp = assignPublicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public String[] securityGroups;
    public VpcConfig withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonProperty("subnets")
    public String[] subnets;
    public VpcConfig withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}