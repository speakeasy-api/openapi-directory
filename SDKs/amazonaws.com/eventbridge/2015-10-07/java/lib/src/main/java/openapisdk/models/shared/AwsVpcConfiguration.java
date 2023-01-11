package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsVpcConfiguration
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.
**/
public class AwsVpcConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignPublicIp")
    public AssignPublicIpEnum assignPublicIp;
    public AwsVpcConfiguration withAssignPublicIp(AssignPublicIpEnum assignPublicIp) {
        this.assignPublicIp = assignPublicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroups")
    public String[] securityGroups;
    public AwsVpcConfiguration withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonProperty("Subnets")
    public String[] subnets;
    public AwsVpcConfiguration withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}