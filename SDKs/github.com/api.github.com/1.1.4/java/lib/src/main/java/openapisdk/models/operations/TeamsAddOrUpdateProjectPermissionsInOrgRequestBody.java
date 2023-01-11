package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum permission;
    public TeamsAddOrUpdateProjectPermissionsInOrgRequestBody withPermission(TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}