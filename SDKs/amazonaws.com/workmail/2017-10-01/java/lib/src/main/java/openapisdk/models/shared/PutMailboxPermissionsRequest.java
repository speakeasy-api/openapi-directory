package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutMailboxPermissionsRequest {
    @JsonProperty("EntityId")
    public String entityId;
    public PutMailboxPermissionsRequest withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonProperty("GranteeId")
    public String granteeId;
    public PutMailboxPermissionsRequest withGranteeId(String granteeId) {
        this.granteeId = granteeId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public PutMailboxPermissionsRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("PermissionValues")
    public PermissionTypeEnum[] permissionValues;
    public PutMailboxPermissionsRequest withPermissionValues(PermissionTypeEnum[] permissionValues) {
        this.permissionValues = permissionValues;
        return this;
    }
}