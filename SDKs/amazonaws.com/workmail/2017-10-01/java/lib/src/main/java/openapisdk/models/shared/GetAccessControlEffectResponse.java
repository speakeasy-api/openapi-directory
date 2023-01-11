package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccessControlEffectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Effect")
    public AccessControlRuleEffectEnum effect;
    public GetAccessControlEffectResponse withEffect(AccessControlRuleEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchedRules")
    public String[] matchedRules;
    public GetAccessControlEffectResponse withMatchedRules(String[] matchedRules) {
        this.matchedRules = matchedRules;
        return this;
    }
}