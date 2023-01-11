package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RuleListLinks
 * Links to know if the user can create a rule or run all rules
**/
public class RuleListLinks {
    @JsonProperty("create")
    public LinksCreateRuleLink create;
    public RuleListLinks withCreate(LinksCreateRuleLink create) {
        this.create = create;
        return this;
    }
    @JsonProperty("history")
    public LinksGetRulesExecutionsLink history;
    public RuleListLinks withHistory(LinksGetRulesExecutionsLink history) {
        this.history = history;
        return this;
    }
    @JsonProperty("run")
    public LinksRunRulesLink run;
    public RuleListLinks withRun(LinksRunRulesLink run) {
        this.run = run;
        return this;
    }
    @JsonProperty("self")
    public LinksGetRulesLink self;
    public RuleListLinks withSelf(LinksGetRulesLink self) {
        this.self = self;
        return this;
    }
}