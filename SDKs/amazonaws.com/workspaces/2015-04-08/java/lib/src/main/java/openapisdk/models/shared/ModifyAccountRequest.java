package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyAccountRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedTenancyManagementCidrRange")
    public String dedicatedTenancyManagementCidrRange;
    public ModifyAccountRequest withDedicatedTenancyManagementCidrRange(String dedicatedTenancyManagementCidrRange) {
        this.dedicatedTenancyManagementCidrRange = dedicatedTenancyManagementCidrRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedTenancySupport")
    public DedicatedTenancySupportEnumEnum dedicatedTenancySupport;
    public ModifyAccountRequest withDedicatedTenancySupport(DedicatedTenancySupportEnumEnum dedicatedTenancySupport) {
        this.dedicatedTenancySupport = dedicatedTenancySupport;
        return this;
    }
}