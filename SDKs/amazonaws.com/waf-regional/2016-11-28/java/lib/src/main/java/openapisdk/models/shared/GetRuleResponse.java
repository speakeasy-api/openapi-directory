package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rule")
    public Rule rule;
    public GetRuleResponse withRule(Rule rule) {
        this.rule = rule;
        return this;
    }
}