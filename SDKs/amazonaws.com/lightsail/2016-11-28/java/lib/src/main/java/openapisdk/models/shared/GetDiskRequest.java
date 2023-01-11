package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDiskRequest {
    @JsonProperty("diskName")
    public String diskName;
    public GetDiskRequest withDiskName(String diskName) {
        this.diskName = diskName;
        return this;
    }
}