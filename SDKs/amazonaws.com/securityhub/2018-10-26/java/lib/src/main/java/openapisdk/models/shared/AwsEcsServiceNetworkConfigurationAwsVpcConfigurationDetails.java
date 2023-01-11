package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails
 * For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
**/
public class AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignPublicIp")
    public String assignPublicIp;
    public AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails withAssignPublicIp(String assignPublicIp) {
        this.assignPublicIp = assignPublicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroups")
    public String[] securityGroups;
    public AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subnets")
    public String[] subnets;
    public AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}