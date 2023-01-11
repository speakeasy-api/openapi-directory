package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsJobExecutionsRolloutConfig
 * Configuration for the rollout of OTA updates.
**/
public class AwsJobExecutionsRolloutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exponentialRate")
    public AwsJobExponentialRolloutRate exponentialRate;
    public AwsJobExecutionsRolloutConfig withExponentialRate(AwsJobExponentialRolloutRate exponentialRate) {
        this.exponentialRate = exponentialRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPerMinute")
    public Long maximumPerMinute;
    public AwsJobExecutionsRolloutConfig withMaximumPerMinute(Long maximumPerMinute) {
        this.maximumPerMinute = maximumPerMinute;
        return this;
    }
}