package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateMatchmakingRuleSetOutput
 * Represents the returned data in response to a request operation.
**/
public class CreateMatchmakingRuleSetOutput {
    @JsonProperty("RuleSet")
    public MatchmakingRuleSet ruleSet;
    public CreateMatchmakingRuleSetOutput withRuleSet(MatchmakingRuleSet ruleSet) {
        this.ruleSet = ruleSet;
        return this;
    }
}