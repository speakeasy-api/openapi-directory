package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateJobRequestBodyJobExecutionsRolloutConfig
 * Allows you to create a staged rollout of a job.
**/
public class UpdateJobRequestBodyJobExecutionsRolloutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exponentialRate")
    public openapisdk.models.shared.ExponentialRolloutRate exponentialRate;
    public UpdateJobRequestBodyJobExecutionsRolloutConfig withExponentialRate(openapisdk.models.shared.ExponentialRolloutRate exponentialRate) {
        this.exponentialRate = exponentialRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPerMinute")
    public Long maximumPerMinute;
    public UpdateJobRequestBodyJobExecutionsRolloutConfig withMaximumPerMinute(Long maximumPerMinute) {
        this.maximumPerMinute = maximumPerMinute;
        return this;
    }
}