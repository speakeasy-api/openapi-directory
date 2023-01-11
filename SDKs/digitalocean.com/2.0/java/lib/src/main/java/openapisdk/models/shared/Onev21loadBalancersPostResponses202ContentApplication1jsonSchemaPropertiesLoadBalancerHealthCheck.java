package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck
 * An object specifying health check settings for the load balancer.
**/
public class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_interval_seconds")
    public Long checkIntervalSeconds;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck withCheckIntervalSeconds(Long checkIntervalSeconds) {
        this.checkIntervalSeconds = checkIntervalSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthy_threshold")
    public Long healthyThreshold;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum protocol;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck withProtocol(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_timeout_seconds")
    public Long responseTimeoutSeconds;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck withResponseTimeoutSeconds(Long responseTimeoutSeconds) {
        this.responseTimeoutSeconds = responseTimeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unhealthy_threshold")
    public Long unhealthyThreshold;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}