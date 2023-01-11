package openapisdk.models.shared;



/**
 * Rule
 * Information about a rule.
**/
public class Rule {
    public Action[] actions;
    public Rule withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    public RuleCondition[] conditions;
    public Rule withConditions(RuleCondition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    public Boolean isDefault;
    public Rule withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    public String priority;
    public Rule withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    public String ruleArn;
    public Rule withRuleArn(String ruleArn) {
        this.ruleArn = ruleArn;
        return this;
    }
}