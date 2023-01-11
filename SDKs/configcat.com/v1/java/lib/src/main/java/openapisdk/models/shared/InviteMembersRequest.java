package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InviteMembersRequest {
    @JsonProperty("emails")
    public String[] emails;
    public InviteMembersRequest withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonProperty("permissionGroupId")
    public Long permissionGroupId;
    public InviteMembersRequest withPermissionGroupId(Long permissionGroupId) {
        this.permissionGroupId = permissionGroupId;
        return this;
    }
}