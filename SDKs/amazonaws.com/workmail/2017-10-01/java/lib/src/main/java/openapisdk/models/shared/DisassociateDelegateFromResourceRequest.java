package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateDelegateFromResourceRequest {
    @JsonProperty("EntityId")
    public String entityId;
    public DisassociateDelegateFromResourceRequest withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DisassociateDelegateFromResourceRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public DisassociateDelegateFromResourceRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}