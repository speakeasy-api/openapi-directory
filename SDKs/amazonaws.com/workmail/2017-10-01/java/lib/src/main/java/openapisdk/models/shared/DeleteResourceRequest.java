package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResourceRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DeleteResourceRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public DeleteResourceRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}