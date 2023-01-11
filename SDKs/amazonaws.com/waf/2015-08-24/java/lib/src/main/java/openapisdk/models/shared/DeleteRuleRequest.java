package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRuleRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteRuleRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("RuleId")
    public String ruleId;
    public DeleteRuleRequest withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}