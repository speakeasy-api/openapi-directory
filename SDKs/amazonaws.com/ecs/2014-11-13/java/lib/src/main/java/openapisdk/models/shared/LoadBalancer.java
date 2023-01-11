package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadBalancer
 * <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p>
**/
public class LoadBalancer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerName")
    public String containerName;
    public LoadBalancer withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPort")
    public Long containerPort;
    public LoadBalancer withContainerPort(Long containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;
    public LoadBalancer withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGroupArn")
    public String targetGroupArn;
    public LoadBalancer withTargetGroupArn(String targetGroupArn) {
        this.targetGroupArn = targetGroupArn;
        return this;
    }
}