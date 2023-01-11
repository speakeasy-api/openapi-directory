package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WafExcludedRule
 * Details about a rule to exclude from a rule group.
**/
public class WafExcludedRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleId")
    public String ruleId;
    public WafExcludedRule withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}