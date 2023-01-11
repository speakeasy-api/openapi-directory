package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayHealthCheckPolicy
 * An object that represents the health check policy for a virtual gateway's listener.
**/
public class VirtualGatewayHealthCheckPolicy {
    @JsonProperty("healthyThreshold")
    public Long healthyThreshold;
    public VirtualGatewayHealthCheckPolicy withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @JsonProperty("intervalMillis")
    public Long intervalMillis;
    public VirtualGatewayHealthCheckPolicy withIntervalMillis(Long intervalMillis) {
        this.intervalMillis = intervalMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public VirtualGatewayHealthCheckPolicy withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public VirtualGatewayHealthCheckPolicy withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public VirtualGatewayPortProtocolEnum protocol;
    public VirtualGatewayHealthCheckPolicy withProtocol(VirtualGatewayPortProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("timeoutMillis")
    public Long timeoutMillis;
    public VirtualGatewayHealthCheckPolicy withTimeoutMillis(Long timeoutMillis) {
        this.timeoutMillis = timeoutMillis;
        return this;
    }
    @JsonProperty("unhealthyThreshold")
    public Long unhealthyThreshold;
    public VirtualGatewayHealthCheckPolicy withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}