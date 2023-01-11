package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Device
 * An object representing a container instance host device.
**/
public class Device {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPath")
    public String containerPath;
    public Device withContainerPath(String containerPath) {
        this.containerPath = containerPath;
        return this;
    }
    @JsonProperty("hostPath")
    public String hostPath;
    public Device withHostPath(String hostPath) {
        this.hostPath = hostPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public DeviceCgroupPermissionEnum[] permissions;
    public Device withPermissions(DeviceCgroupPermissionEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
}