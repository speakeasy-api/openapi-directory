package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IoTJobRateIncreaseCriteria
 * Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.
**/
public class IoTJobRateIncreaseCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfNotifiedThings")
    public Long numberOfNotifiedThings;
    public IoTJobRateIncreaseCriteria withNumberOfNotifiedThings(Long numberOfNotifiedThings) {
        this.numberOfNotifiedThings = numberOfNotifiedThings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfSucceededThings")
    public Long numberOfSucceededThings;
    public IoTJobRateIncreaseCriteria withNumberOfSucceededThings(Long numberOfSucceededThings) {
        this.numberOfSucceededThings = numberOfSucceededThings;
        return this;
    }
}