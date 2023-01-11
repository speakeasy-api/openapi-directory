package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
 * An object specifying health check settings for the load balancer.
**/
public class UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_interval_seconds")
    public Long checkIntervalSeconds;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck withCheckIntervalSeconds(Long checkIntervalSeconds) {
        this.checkIntervalSeconds = checkIntervalSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthy_threshold")
    public Long healthyThreshold;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum protocol;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck withProtocol(UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_timeout_seconds")
    public Long responseTimeoutSeconds;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck withResponseTimeoutSeconds(Long responseTimeoutSeconds) {
        this.responseTimeoutSeconds = responseTimeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unhealthy_threshold")
    public Long unhealthyThreshold;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}