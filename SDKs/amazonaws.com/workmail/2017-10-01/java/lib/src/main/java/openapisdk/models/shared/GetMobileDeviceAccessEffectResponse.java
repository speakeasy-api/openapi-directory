package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMobileDeviceAccessEffectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Effect")
    public MobileDeviceAccessRuleEffectEnum effect;
    public GetMobileDeviceAccessEffectResponse withEffect(MobileDeviceAccessRuleEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchedRules")
    public MobileDeviceAccessMatchedRule[] matchedRules;
    public GetMobileDeviceAccessEffectResponse withMatchedRules(MobileDeviceAccessMatchedRule[] matchedRules) {
        this.matchedRules = matchedRules;
        return this;
    }
}