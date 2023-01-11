package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUserRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DeleteUserRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public DeleteUserRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}