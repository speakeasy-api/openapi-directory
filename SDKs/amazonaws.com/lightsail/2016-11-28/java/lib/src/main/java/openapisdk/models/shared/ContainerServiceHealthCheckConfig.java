package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerServiceHealthCheckConfig
 * Describes the health check configuration of an Amazon Lightsail container service.
**/
public class ContainerServiceHealthCheckConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthyThreshold")
    public Long healthyThreshold;
    public ContainerServiceHealthCheckConfig withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervalSeconds")
    public Long intervalSeconds;
    public ContainerServiceHealthCheckConfig withIntervalSeconds(Long intervalSeconds) {
        this.intervalSeconds = intervalSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ContainerServiceHealthCheckConfig withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successCodes")
    public String successCodes;
    public ContainerServiceHealthCheckConfig withSuccessCodes(String successCodes) {
        this.successCodes = successCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutSeconds")
    public Long timeoutSeconds;
    public ContainerServiceHealthCheckConfig withTimeoutSeconds(Long timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unhealthyThreshold")
    public Long unhealthyThreshold;
    public ContainerServiceHealthCheckConfig withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}