package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HostVolumeProperties
 * Details on a container instance bind mount host volume.
**/
public class HostVolumeProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePath")
    public String sourcePath;
    public HostVolumeProperties withSourcePath(String sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    }
}