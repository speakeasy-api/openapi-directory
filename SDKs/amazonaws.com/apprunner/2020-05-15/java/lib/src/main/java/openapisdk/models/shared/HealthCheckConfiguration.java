package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HealthCheckConfiguration
 * Describes the settings for the health check that AWS App Runner performs to monitor the health of a service.
**/
public class HealthCheckConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthyThreshold")
    public Long healthyThreshold;
    public HealthCheckConfiguration withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interval")
    public Long interval;
    public HealthCheckConfiguration withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public HealthCheckConfiguration withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public HealthCheckProtocolEnum protocol;
    public HealthCheckConfiguration withProtocol(HealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public HealthCheckConfiguration withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnhealthyThreshold")
    public Long unhealthyThreshold;
    public HealthCheckConfiguration withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}