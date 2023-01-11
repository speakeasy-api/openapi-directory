package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPermissionRequestBody {
    @JsonProperty("permissionArn")
    public String permissionArn;
    public GetPermissionRequestBody withPermissionArn(String permissionArn) {
        this.permissionArn = permissionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionVersion")
    public Long permissionVersion;
    public GetPermissionRequestBody withPermissionVersion(Long permissionVersion) {
        this.permissionVersion = permissionVersion;
        return this;
    }
}