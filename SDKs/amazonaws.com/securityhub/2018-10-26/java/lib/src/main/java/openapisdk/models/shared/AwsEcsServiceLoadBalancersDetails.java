package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsServiceLoadBalancersDetails
 * Information about a load balancer that the service uses.
**/
public class AwsEcsServiceLoadBalancersDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerName")
    public String containerName;
    public AwsEcsServiceLoadBalancersDetails withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerPort")
    public Long containerPort;
    public AwsEcsServiceLoadBalancersDetails withContainerPort(Long containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoadBalancerName")
    public String loadBalancerName;
    public AwsEcsServiceLoadBalancersDetails withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetGroupArn")
    public String targetGroupArn;
    public AwsEcsServiceLoadBalancersDetails withTargetGroupArn(String targetGroupArn) {
        this.targetGroupArn = targetGroupArn;
        return this;
    }
}