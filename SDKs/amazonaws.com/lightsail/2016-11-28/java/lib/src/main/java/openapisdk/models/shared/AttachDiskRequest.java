package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachDiskRequest {
    @JsonProperty("diskName")
    public String diskName;
    public AttachDiskRequest withDiskName(String diskName) {
        this.diskName = diskName;
        return this;
    }
    @JsonProperty("diskPath")
    public String diskPath;
    public AttachDiskRequest withDiskPath(String diskPath) {
        this.diskPath = diskPath;
        return this;
    }
    @JsonProperty("instanceName")
    public String instanceName;
    public AttachDiskRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
}