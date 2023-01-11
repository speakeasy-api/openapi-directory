package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IoTJobExponentialRolloutRate
 * Contains information about an exponential rollout rate for a configuration deployment job.
**/
public class IoTJobExponentialRolloutRate {
    @JsonProperty("baseRatePerMinute")
    public Long baseRatePerMinute;
    public IoTJobExponentialRolloutRate withBaseRatePerMinute(Long baseRatePerMinute) {
        this.baseRatePerMinute = baseRatePerMinute;
        return this;
    }
    @JsonProperty("incrementFactor")
    public Double incrementFactor;
    public IoTJobExponentialRolloutRate withIncrementFactor(Double incrementFactor) {
        this.incrementFactor = incrementFactor;
        return this;
    }
    @JsonProperty("rateIncreaseCriteria")
    public IoTJobRateIncreaseCriteria rateIncreaseCriteria;
    public IoTJobExponentialRolloutRate withRateIncreaseCriteria(IoTJobRateIncreaseCriteria rateIncreaseCriteria) {
        this.rateIncreaseCriteria = rateIncreaseCriteria;
        return this;
    }
}