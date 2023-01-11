package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListMobileDeviceAccessRulesRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public ListMobileDeviceAccessRulesRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}