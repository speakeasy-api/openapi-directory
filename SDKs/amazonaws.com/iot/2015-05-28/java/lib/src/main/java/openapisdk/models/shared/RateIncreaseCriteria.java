package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateIncreaseCriteria
 * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
**/
public class RateIncreaseCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfNotifiedThings")
    public Long numberOfNotifiedThings;
    public RateIncreaseCriteria withNumberOfNotifiedThings(Long numberOfNotifiedThings) {
        this.numberOfNotifiedThings = numberOfNotifiedThings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfSucceededThings")
    public Long numberOfSucceededThings;
    public RateIncreaseCriteria withNumberOfSucceededThings(Long numberOfSucceededThings) {
        this.numberOfSucceededThings = numberOfSucceededThings;
        return this;
    }
}