package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Condition
 * Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
**/
public class Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Conditions")
    public SimpleCondition[] conditions;
    public Condition withConditions(SimpleCondition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Operator")
    public OperatorEnum operator;
    public Condition withOperator(OperatorEnum operator) {
        this.operator = operator;
        return this;
    }
}