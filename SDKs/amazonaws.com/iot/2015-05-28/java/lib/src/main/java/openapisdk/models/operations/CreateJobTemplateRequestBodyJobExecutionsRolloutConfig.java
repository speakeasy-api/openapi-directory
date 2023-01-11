package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobTemplateRequestBodyJobExecutionsRolloutConfig
 * Allows you to create a staged rollout of a job.
**/
public class CreateJobTemplateRequestBodyJobExecutionsRolloutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exponentialRate")
    public openapisdk.models.shared.ExponentialRolloutRate exponentialRate;
    public CreateJobTemplateRequestBodyJobExecutionsRolloutConfig withExponentialRate(openapisdk.models.shared.ExponentialRolloutRate exponentialRate) {
        this.exponentialRate = exponentialRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPerMinute")
    public Long maximumPerMinute;
    public CreateJobTemplateRequestBodyJobExecutionsRolloutConfig withMaximumPerMinute(Long maximumPerMinute) {
        this.maximumPerMinute = maximumPerMinute;
        return this;
    }
}