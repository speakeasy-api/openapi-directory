package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobExecutionsRolloutConfig
 * Allows you to create a staged rollout of a job.
**/
public class JobExecutionsRolloutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exponentialRate")
    public ExponentialRolloutRate exponentialRate;
    public JobExecutionsRolloutConfig withExponentialRate(ExponentialRolloutRate exponentialRate) {
        this.exponentialRate = exponentialRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPerMinute")
    public Long maximumPerMinute;
    public JobExecutionsRolloutConfig withMaximumPerMinute(Long maximumPerMinute) {
        this.maximumPerMinute = maximumPerMinute;
        return this;
    }
}