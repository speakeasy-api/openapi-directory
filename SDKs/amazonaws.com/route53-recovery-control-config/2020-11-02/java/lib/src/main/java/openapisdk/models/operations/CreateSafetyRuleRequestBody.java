package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSafetyRuleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssertionRule")
    public CreateSafetyRuleRequestBodyAssertionRule assertionRule;
    public CreateSafetyRuleRequestBody withAssertionRule(CreateSafetyRuleRequestBodyAssertionRule assertionRule) {
        this.assertionRule = assertionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateSafetyRuleRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatingRule")
    public CreateSafetyRuleRequestBodyGatingRule gatingRule;
    public CreateSafetyRuleRequestBody withGatingRule(CreateSafetyRuleRequestBodyGatingRule gatingRule) {
        this.gatingRule = gatingRule;
        return this;
    }
}