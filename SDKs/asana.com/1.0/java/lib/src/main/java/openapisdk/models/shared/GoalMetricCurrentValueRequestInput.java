package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalMetricCurrentValueRequestInput
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class GoalMetricCurrentValueRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_number_value")
    public Double currentNumberValue;
    public GoalMetricCurrentValueRequestInput withCurrentNumberValue(Double currentNumberValue) {
        this.currentNumberValue = currentNumberValue;
        return this;
    }
}