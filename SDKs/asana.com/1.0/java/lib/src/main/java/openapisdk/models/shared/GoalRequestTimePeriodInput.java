package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalRequestTimePeriodInput
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class GoalRequestTimePeriodInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_on")
    public String endOn;
    public GoalRequestTimePeriodInput withEndOn(String endOn) {
        this.endOn = endOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public GoalRequestTimePeriodPeriodEnum period;
    public GoalRequestTimePeriodInput withPeriod(GoalRequestTimePeriodPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public String startOn;
    public GoalRequestTimePeriodInput withStartOn(String startOn) {
        this.startOn = startOn;
        return this;
    }
}