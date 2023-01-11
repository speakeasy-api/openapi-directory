package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig
 * Configuration for the rollout of OTA updates.
**/
public class CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exponentialRate")
    public openapisdk.models.shared.AwsJobExponentialRolloutRate exponentialRate;
    public CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig withExponentialRate(openapisdk.models.shared.AwsJobExponentialRolloutRate exponentialRate) {
        this.exponentialRate = exponentialRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPerMinute")
    public Long maximumPerMinute;
    public CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig withMaximumPerMinute(Long maximumPerMinute) {
        this.maximumPerMinute = maximumPerMinute;
        return this;
    }
}