package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck
 * An object specifying health check settings for the load balancer.
**/
public class CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_interval_seconds")
    public Long checkIntervalSeconds;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck withCheckIntervalSeconds(Long checkIntervalSeconds) {
        this.checkIntervalSeconds = checkIntervalSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthy_threshold")
    public Long healthyThreshold;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum protocol;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck withProtocol(CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_timeout_seconds")
    public Long responseTimeoutSeconds;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck withResponseTimeoutSeconds(Long responseTimeoutSeconds) {
        this.responseTimeoutSeconds = responseTimeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unhealthy_threshold")
    public Long unhealthyThreshold;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}