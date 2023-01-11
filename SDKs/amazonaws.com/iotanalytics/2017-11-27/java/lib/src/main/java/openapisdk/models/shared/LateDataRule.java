package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LateDataRule
 * A structure that contains the name and configuration information of a late data rule.
**/
public class LateDataRule {
    @JsonProperty("ruleConfiguration")
    public LateDataRuleConfiguration ruleConfiguration;
    public LateDataRule withRuleConfiguration(LateDataRuleConfiguration ruleConfiguration) {
        this.ruleConfiguration = ruleConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleName")
    public String ruleName;
    public LateDataRule withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}