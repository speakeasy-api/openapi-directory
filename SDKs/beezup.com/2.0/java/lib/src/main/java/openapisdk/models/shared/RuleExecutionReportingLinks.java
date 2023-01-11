package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleExecutionReportingLinks
 * Links to retrieve/action on this rule execution
**/
public class RuleExecutionReportingLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public LinksGetRuleLink rule;
    public RuleExecutionReportingLinks withRule(LinksGetRuleLink rule) {
        this.rule = rule;
        return this;
    }
}