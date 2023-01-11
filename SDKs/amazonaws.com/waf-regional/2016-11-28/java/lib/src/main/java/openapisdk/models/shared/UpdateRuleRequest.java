package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRuleRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateRuleRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("RuleId")
    public String ruleId;
    public UpdateRuleRequest withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @JsonProperty("Updates")
    public RuleUpdate[] updates;
    public UpdateRuleRequest withUpdates(RuleUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}