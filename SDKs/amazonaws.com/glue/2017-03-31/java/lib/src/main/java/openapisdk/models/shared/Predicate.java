package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Predicate
 * Defines the predicate of the trigger, which determines when it fires.
**/
public class Predicate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Conditions")
    public Condition[] conditions;
    public Predicate withConditions(Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Logical")
    public LogicalEnum logical;
    public Predicate withLogical(LogicalEnum logical) {
        this.logical = logical;
        return this;
    }
}