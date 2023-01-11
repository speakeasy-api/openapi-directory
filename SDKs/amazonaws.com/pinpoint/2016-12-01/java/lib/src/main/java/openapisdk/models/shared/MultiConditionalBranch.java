package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultiConditionalBranch
 * Specifies a condition to evaluate for an activity path in a journey.
**/
public class MultiConditionalBranch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Condition")
    public SimpleCondition condition;
    public MultiConditionalBranch withCondition(SimpleCondition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextActivity")
    public String nextActivity;
    public MultiConditionalBranch withNextActivity(String nextActivity) {
        this.nextActivity = nextActivity;
        return this;
    }
}