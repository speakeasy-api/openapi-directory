package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateResourceRequest {
    @JsonProperty("Name")
    public String name;
    public CreateResourceRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public CreateResourceRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("Type")
    public ResourceTypeEnum type;
    public CreateResourceRequest withType(ResourceTypeEnum type) {
        this.type = type;
        return this;
    }
}