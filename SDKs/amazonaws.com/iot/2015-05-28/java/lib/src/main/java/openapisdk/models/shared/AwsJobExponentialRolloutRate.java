package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AwsJobExponentialRolloutRate
 * The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
**/
public class AwsJobExponentialRolloutRate {
    @JsonProperty("baseRatePerMinute")
    public Long baseRatePerMinute;
    public AwsJobExponentialRolloutRate withBaseRatePerMinute(Long baseRatePerMinute) {
        this.baseRatePerMinute = baseRatePerMinute;
        return this;
    }
    @JsonProperty("incrementFactor")
    public Double incrementFactor;
    public AwsJobExponentialRolloutRate withIncrementFactor(Double incrementFactor) {
        this.incrementFactor = incrementFactor;
        return this;
    }
    @JsonProperty("rateIncreaseCriteria")
    public AwsJobRateIncreaseCriteria rateIncreaseCriteria;
    public AwsJobExponentialRolloutRate withRateIncreaseCriteria(AwsJobRateIncreaseCriteria rateIncreaseCriteria) {
        this.rateIncreaseCriteria = rateIncreaseCriteria;
        return this;
    }
}