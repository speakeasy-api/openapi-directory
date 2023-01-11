package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMobileDeviceAccessRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MobileDeviceAccessRuleId")
    public String mobileDeviceAccessRuleId;
    public CreateMobileDeviceAccessRuleResponse withMobileDeviceAccessRuleId(String mobileDeviceAccessRuleId) {
        this.mobileDeviceAccessRuleId = mobileDeviceAccessRuleId;
        return this;
    }
}