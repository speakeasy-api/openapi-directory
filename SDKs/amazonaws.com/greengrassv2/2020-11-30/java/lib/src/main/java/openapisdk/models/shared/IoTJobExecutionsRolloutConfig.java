package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IoTJobExecutionsRolloutConfig
 * Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
**/
public class IoTJobExecutionsRolloutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exponentialRate")
    public IoTJobExponentialRolloutRate exponentialRate;
    public IoTJobExecutionsRolloutConfig withExponentialRate(IoTJobExponentialRolloutRate exponentialRate) {
        this.exponentialRate = exponentialRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPerMinute")
    public Long maximumPerMinute;
    public IoTJobExecutionsRolloutConfig withMaximumPerMinute(Long maximumPerMinute) {
        this.maximumPerMinute = maximumPerMinute;
        return this;
    }
}