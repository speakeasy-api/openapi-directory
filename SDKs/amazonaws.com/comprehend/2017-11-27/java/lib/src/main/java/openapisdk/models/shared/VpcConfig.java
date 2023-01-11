package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VpcConfig
 *  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. 
**/
public class VpcConfig {
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public VpcConfig withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonProperty("Subnets")
    public String[] subnets;
    public VpcConfig withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}