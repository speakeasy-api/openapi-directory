package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeOrganizationRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DescribeOrganizationRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}