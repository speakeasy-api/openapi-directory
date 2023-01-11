package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateGroupRequest {
    @JsonProperty("Name")
    public String name;
    public CreateGroupRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public CreateGroupRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}