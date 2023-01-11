package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RuleList {
    @JsonProperty("links")
    public RuleListLinks links;
    public RuleList withLinks(RuleListLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("rules")
    public Rule[] rules;
    public RuleList withRules(Rule[] rules) {
        this.rules = rules;
        return this;
    }
}