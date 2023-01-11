package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsVpcConfiguration
 * An object representing the networking details for a task or service.
**/
public class AwsVpcConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignPublicIp")
    public AssignPublicIpEnum assignPublicIp;
    public AwsVpcConfiguration withAssignPublicIp(AssignPublicIpEnum assignPublicIp) {
        this.assignPublicIp = assignPublicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public String[] securityGroups;
    public AwsVpcConfiguration withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonProperty("subnets")
    public String[] subnets;
    public AwsVpcConfiguration withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}