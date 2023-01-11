package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDiskResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disk")
    public Disk disk;
    public GetDiskResult withDisk(Disk disk) {
        this.disk = disk;
        return this;
    }
}