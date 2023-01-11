package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRateBasedRuleRequest {
    @JsonProperty("RuleId")
    public String ruleId;
    public GetRateBasedRuleRequest withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}