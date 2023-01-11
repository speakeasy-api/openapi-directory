package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRateBasedRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRateBasedRuleResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rule")
    public RateBasedRule rule;
    public CreateRateBasedRuleResponse withRule(RateBasedRule rule) {
        this.rule = rule;
        return this;
    }
}