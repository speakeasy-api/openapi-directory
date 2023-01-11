package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSafetyRuleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssertionRuleUpdate")
    public UpdateSafetyRuleRequestBodyAssertionRuleUpdate assertionRuleUpdate;
    public UpdateSafetyRuleRequestBody withAssertionRuleUpdate(UpdateSafetyRuleRequestBodyAssertionRuleUpdate assertionRuleUpdate) {
        this.assertionRuleUpdate = assertionRuleUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatingRuleUpdate")
    public UpdateSafetyRuleRequestBodyGatingRuleUpdate gatingRuleUpdate;
    public UpdateSafetyRuleRequestBody withGatingRuleUpdate(UpdateSafetyRuleRequestBodyGatingRuleUpdate gatingRuleUpdate) {
        this.gatingRuleUpdate = gatingRuleUpdate;
        return this;
    }
}