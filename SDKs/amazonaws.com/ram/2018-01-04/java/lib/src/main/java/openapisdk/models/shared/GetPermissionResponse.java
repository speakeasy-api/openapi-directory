package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public ResourceSharePermissionDetail permission;
    public GetPermissionResponse withPermission(ResourceSharePermissionDetail permission) {
        this.permission = permission;
        return this;
    }
}