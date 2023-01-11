package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCanaryRequestBodyVpcConfig
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
public class UpdateCanaryRequestBodyVpcConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public UpdateCanaryRequestBodyVpcConfig withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public UpdateCanaryRequestBodyVpcConfig withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
}