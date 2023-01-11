package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSafetyRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssertionRule")
    public AssertionRule assertionRule;
    public CreateSafetyRuleResponse withAssertionRule(AssertionRule assertionRule) {
        this.assertionRule = assertionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatingRule")
    public GatingRule gatingRule;
    public CreateSafetyRuleResponse withGatingRule(GatingRule gatingRule) {
        this.gatingRule = gatingRule;
        return this;
    }
}