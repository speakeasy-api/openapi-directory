package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum permission;
    public TeamsAddOrUpdateRepoPermissionsInOrgRequestBody withPermission(TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}