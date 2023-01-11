package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatefulRule
 * A single 5-tuple stateful rule, for use in a stateful rule group.
**/
public class StatefulRule {
    @JsonProperty("Action")
    public StatefulActionEnum action;
    public StatefulRule withAction(StatefulActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("Header")
    public Header header;
    public StatefulRule withHeader(Header header) {
        this.header = header;
        return this;
    }
    @JsonProperty("RuleOptions")
    public RuleOption[] ruleOptions;
    public StatefulRule withRuleOptions(RuleOption[] ruleOptions) {
        this.ruleOptions = ruleOptions;
        return this;
    }
}