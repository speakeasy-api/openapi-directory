package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRateBasedRuleManagedKeysRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public GetRateBasedRuleManagedKeysRequest withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonProperty("RuleId")
    public String ruleId;
    public GetRateBasedRuleManagedKeysRequest withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}