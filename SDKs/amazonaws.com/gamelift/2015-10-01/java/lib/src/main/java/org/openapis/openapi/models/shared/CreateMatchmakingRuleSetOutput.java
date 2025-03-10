/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateMatchmakingRuleSetOutput - Success
 */
public class CreateMatchmakingRuleSetOutput {
    @JsonProperty("RuleSet")
    public MatchmakingRuleSet ruleSet;

    public CreateMatchmakingRuleSetOutput withRuleSet(MatchmakingRuleSet ruleSet) {
        this.ruleSet = ruleSet;
        return this;
    }
    
    public CreateMatchmakingRuleSetOutput(@JsonProperty("RuleSet") MatchmakingRuleSet ruleSet) {
        this.ruleSet = ruleSet;
  }
}
