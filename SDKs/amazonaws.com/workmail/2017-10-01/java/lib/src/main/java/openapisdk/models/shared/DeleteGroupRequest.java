package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGroupRequest {
    @JsonProperty("GroupId")
    public String groupId;
    public DeleteGroupRequest withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DeleteGroupRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}