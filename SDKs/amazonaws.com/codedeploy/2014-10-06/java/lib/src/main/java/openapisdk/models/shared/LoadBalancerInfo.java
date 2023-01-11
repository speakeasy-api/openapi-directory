package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadBalancerInfo
 * Information about the Elastic Load Balancing load balancer or target group used in a deployment.
**/
public class LoadBalancerInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elbInfoList")
    public ElbInfo[] elbInfoList;
    public LoadBalancerInfo withElbInfoList(ElbInfo[] elbInfoList) {
        this.elbInfoList = elbInfoList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGroupInfoList")
    public TargetGroupInfo[] targetGroupInfoList;
    public LoadBalancerInfo withTargetGroupInfoList(TargetGroupInfo[] targetGroupInfoList) {
        this.targetGroupInfoList = targetGroupInfoList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGroupPairInfoList")
    public TargetGroupPairInfo[] targetGroupPairInfoList;
    public LoadBalancerInfo withTargetGroupPairInfoList(TargetGroupPairInfo[] targetGroupPairInfoList) {
        this.targetGroupPairInfoList = targetGroupPairInfoList;
        return this;
    }
}