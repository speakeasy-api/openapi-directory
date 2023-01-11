package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsJobRateIncreaseCriteria
 * The criteria to initiate the increase in rate of rollout for a job.
**/
public class AwsJobRateIncreaseCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfNotifiedThings")
    public Long numberOfNotifiedThings;
    public AwsJobRateIncreaseCriteria withNumberOfNotifiedThings(Long numberOfNotifiedThings) {
        this.numberOfNotifiedThings = numberOfNotifiedThings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfSucceededThings")
    public Long numberOfSucceededThings;
    public AwsJobRateIncreaseCriteria withNumberOfSucceededThings(Long numberOfSucceededThings) {
        this.numberOfSucceededThings = numberOfSucceededThings;
        return this;
    }
}