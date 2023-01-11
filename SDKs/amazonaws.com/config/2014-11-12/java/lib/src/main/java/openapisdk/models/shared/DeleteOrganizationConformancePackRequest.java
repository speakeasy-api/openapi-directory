package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteOrganizationConformancePackRequest {
    @JsonProperty("OrganizationConformancePackName")
    public String organizationConformancePackName;
    public DeleteOrganizationConformancePackRequest withOrganizationConformancePackName(String organizationConformancePackName) {
        this.organizationConformancePackName = organizationConformancePackName;
        return this;
    }
}