package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVolumeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MountPoint")
    public String mountPoint;
    public UpdateVolumeRequest withMountPoint(String mountPoint) {
        this.mountPoint = mountPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateVolumeRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("VolumeId")
    public String volumeId;
    public UpdateVolumeRequest withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}