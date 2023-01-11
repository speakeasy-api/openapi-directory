package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachDiskRequest {
    @JsonProperty("diskName")
    public String diskName;
    public DetachDiskRequest withDiskName(String diskName) {
        this.diskName = diskName;
        return this;
    }
}