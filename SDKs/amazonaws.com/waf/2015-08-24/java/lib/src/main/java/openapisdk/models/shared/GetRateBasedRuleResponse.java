package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRateBasedRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rule")
    public RateBasedRule rule;
    public GetRateBasedRuleResponse withRule(RateBasedRule rule) {
        this.rule = rule;
        return this;
    }
}