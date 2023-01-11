package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCompanyNetworkConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public DescribeCompanyNetworkConfigurationResponse withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public DescribeCompanyNetworkConfigurationResponse withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public DescribeCompanyNetworkConfigurationResponse withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}