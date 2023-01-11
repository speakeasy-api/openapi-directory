package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteMailboxPermissionsRequest {
    @JsonProperty("EntityId")
    public String entityId;
    public DeleteMailboxPermissionsRequest withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonProperty("GranteeId")
    public String granteeId;
    public DeleteMailboxPermissionsRequest withGranteeId(String granteeId) {
        this.granteeId = granteeId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DeleteMailboxPermissionsRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}