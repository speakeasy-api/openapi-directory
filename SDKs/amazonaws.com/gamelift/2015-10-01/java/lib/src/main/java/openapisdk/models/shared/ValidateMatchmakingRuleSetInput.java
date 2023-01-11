package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ValidateMatchmakingRuleSetInput
 * Represents the input for a request operation.
**/
public class ValidateMatchmakingRuleSetInput {
    @JsonProperty("RuleSetBody")
    public String ruleSetBody;
    public ValidateMatchmakingRuleSetInput withRuleSetBody(String ruleSetBody) {
        this.ruleSetBody = ruleSetBody;
        return this;
    }
}