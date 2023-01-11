package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatelessRule
 * A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.
**/
public class StatelessRule {
    @JsonProperty("Priority")
    public Long priority;
    public StatelessRule withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonProperty("RuleDefinition")
    public RuleDefinition ruleDefinition;
    public StatelessRule withRuleDefinition(RuleDefinition ruleDefinition) {
        this.ruleDefinition = ruleDefinition;
        return this;
    }
}