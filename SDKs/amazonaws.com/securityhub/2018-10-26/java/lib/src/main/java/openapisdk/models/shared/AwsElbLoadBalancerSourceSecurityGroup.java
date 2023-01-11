package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerSourceSecurityGroup
 * Contains information about the security group for the load balancer.
**/
public class AwsElbLoadBalancerSourceSecurityGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public AwsElbLoadBalancerSourceSecurityGroup withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerAlias")
    public String ownerAlias;
    public AwsElbLoadBalancerSourceSecurityGroup withOwnerAlias(String ownerAlias) {
        this.ownerAlias = ownerAlias;
        return this;
    }
}