package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimpleRuleEvaluation
 * Information needed to compare two values with a comparison operator.
**/
public class SimpleRuleEvaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputPropertyValue")
    public String inputPropertyValue;
    public SimpleRuleEvaluation withInputPropertyValue(String inputPropertyValue) {
        this.inputPropertyValue = inputPropertyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public ComparisonOperatorEnum operator;
    public SimpleRuleEvaluation withOperator(ComparisonOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thresholdValue")
    public String thresholdValue;
    public SimpleRuleEvaluation withThresholdValue(String thresholdValue) {
        this.thresholdValue = thresholdValue;
        return this;
    }
}