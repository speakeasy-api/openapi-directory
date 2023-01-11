package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMobileDeviceAccessRuleRequest {
    @JsonProperty("MobileDeviceAccessRuleId")
    public String mobileDeviceAccessRuleId;
    public DeleteMobileDeviceAccessRuleRequest withMobileDeviceAccessRuleId(String mobileDeviceAccessRuleId) {
        this.mobileDeviceAccessRuleId = mobileDeviceAccessRuleId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DeleteMobileDeviceAccessRuleRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}