package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HealthCheckPolicy
 * An object representing the health check policy for a virtual node's listener.
**/
public class HealthCheckPolicy {
    @JsonProperty("healthyThreshold")
    public Long healthyThreshold;
    public HealthCheckPolicy withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @JsonProperty("intervalMillis")
    public Long intervalMillis;
    public HealthCheckPolicy withIntervalMillis(Long intervalMillis) {
        this.intervalMillis = intervalMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public HealthCheckPolicy withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public HealthCheckPolicy withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PortProtocolEnum protocol;
    public HealthCheckPolicy withProtocol(PortProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("timeoutMillis")
    public Long timeoutMillis;
    public HealthCheckPolicy withTimeoutMillis(Long timeoutMillis) {
        this.timeoutMillis = timeoutMillis;
        return this;
    }
    @JsonProperty("unhealthyThreshold")
    public Long unhealthyThreshold;
    public HealthCheckPolicy withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}