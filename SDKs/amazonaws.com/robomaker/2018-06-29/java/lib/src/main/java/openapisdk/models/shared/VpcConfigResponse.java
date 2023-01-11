package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcConfigResponse
 * VPC configuration associated with your simulation job.
**/
public class VpcConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignPublicIp")
    public Boolean assignPublicIp;
    public VpcConfigResponse withAssignPublicIp(Boolean assignPublicIp) {
        this.assignPublicIp = assignPublicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroups")
    public String[] securityGroups;
    public VpcConfigResponse withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public String[] subnets;
    public VpcConfigResponse withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcId")
    public String vpcId;
    public VpcConfigResponse withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}