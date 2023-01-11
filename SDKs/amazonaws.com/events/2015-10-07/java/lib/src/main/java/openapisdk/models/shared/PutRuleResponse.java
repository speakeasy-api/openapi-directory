package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleArn")
    public String ruleArn;
    public PutRuleResponse withRuleArn(String ruleArn) {
        this.ruleArn = ruleArn;
        return this;
    }
}