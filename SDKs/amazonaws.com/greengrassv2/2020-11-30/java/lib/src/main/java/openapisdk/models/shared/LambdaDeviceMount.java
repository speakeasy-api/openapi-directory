package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaDeviceMount
 * Contains information about a device that Linux processes in a container can access.
**/
public class LambdaDeviceMount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addGroupOwner")
    public Boolean addGroupOwner;
    public LambdaDeviceMount withAddGroupOwner(Boolean addGroupOwner) {
        this.addGroupOwner = addGroupOwner;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public LambdaDeviceMount withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public LambdaFilesystemPermissionEnum permission;
    public LambdaDeviceMount withPermission(LambdaFilesystemPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}