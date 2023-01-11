package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MountPoint
 * Details on a Docker volume mount point that's used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run.
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