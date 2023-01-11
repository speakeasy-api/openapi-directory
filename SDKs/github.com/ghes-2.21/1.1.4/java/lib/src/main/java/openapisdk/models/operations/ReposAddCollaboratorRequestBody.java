package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposAddCollaboratorRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public ReposAddCollaboratorRequestBodyPermissionEnum permission;
    public ReposAddCollaboratorRequestBody withPermission(ReposAddCollaboratorRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String permissions;
    public ReposAddCollaboratorRequestBody withPermissions(String permissions) {
        this.permissions = permissions;
        return this;
    }
}