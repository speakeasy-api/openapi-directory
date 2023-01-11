package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobRequestBodyJobExecutionsRolloutConfig
 * Allows you to create a staged rollout of a job.
**/
public class CreateJobRequestBodyJobExecutionsRolloutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exponentialRate")
    public openapisdk.models.shared.ExponentialRolloutRate exponentialRate;
    public CreateJobRequestBodyJobExecutionsRolloutConfig withExponentialRate(openapisdk.models.shared.ExponentialRolloutRate exponentialRate) {
        this.exponentialRate = exponentialRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPerMinute")
    public Long maximumPerMinute;
    public CreateJobRequestBodyJobExecutionsRolloutConfig withMaximumPerMinute(Long maximumPerMinute) {
        this.maximumPerMinute = maximumPerMinute;
        return this;
    }
}