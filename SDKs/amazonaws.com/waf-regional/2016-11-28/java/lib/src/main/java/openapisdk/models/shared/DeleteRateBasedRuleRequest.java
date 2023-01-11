package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRateBasedRuleRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteRateBasedRuleRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("RuleId")
    public String ruleId;
    public DeleteRateBasedRuleRequest withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}