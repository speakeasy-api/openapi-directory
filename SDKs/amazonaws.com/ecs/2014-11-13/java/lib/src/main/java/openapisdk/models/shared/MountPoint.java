package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MountPoint
 * Details on a volume mount point that is used in a container definition.
**/
public class MountPoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPath")
    public String containerPath;
    public MountPoint withContainerPath(String containerPath) {
        this.containerPath = containerPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public MountPoint withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceVolume")
    public String sourceVolume;
    public MountPoint withSourceVolume(String sourceVolume) {
        this.sourceVolume = sourceVolume;
        return this;
    }
}