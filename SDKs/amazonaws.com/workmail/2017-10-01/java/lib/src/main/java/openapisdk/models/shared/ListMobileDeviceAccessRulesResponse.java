package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMobileDeviceAccessRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public MobileDeviceAccessRule[] rules;
    public ListMobileDeviceAccessRulesResponse withRules(MobileDeviceAccessRule[] rules) {
        this.rules = rules;
        return this;
    }
}