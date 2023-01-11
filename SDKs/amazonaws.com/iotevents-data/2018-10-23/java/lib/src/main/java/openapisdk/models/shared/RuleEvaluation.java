package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleEvaluation
 * Information needed to evaluate data.
**/
public class RuleEvaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simpleRuleEvaluation")
    public SimpleRuleEvaluation simpleRuleEvaluation;
    public RuleEvaluation withSimpleRuleEvaluation(SimpleRuleEvaluation simpleRuleEvaluation) {
        this.simpleRuleEvaluation = simpleRuleEvaluation;
        return this;
    }
}