package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleRequest {
    @JsonProperty("RuleId")
    public String ruleId;
    public GetRuleRequest withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}