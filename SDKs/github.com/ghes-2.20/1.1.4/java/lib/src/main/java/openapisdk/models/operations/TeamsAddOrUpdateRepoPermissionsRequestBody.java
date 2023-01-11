package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateRepoPermissionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum permission;
    public TeamsAddOrUpdateRepoPermissionsRequestBody withPermission(TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}