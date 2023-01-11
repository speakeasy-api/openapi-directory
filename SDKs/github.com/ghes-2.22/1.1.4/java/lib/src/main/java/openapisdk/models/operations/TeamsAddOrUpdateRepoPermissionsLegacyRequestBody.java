package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateRepoPermissionsLegacyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum permission;
    public TeamsAddOrUpdateRepoPermissionsLegacyRequestBody withPermission(TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}