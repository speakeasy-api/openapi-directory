package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDiskSnapshotResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSnapshot")
    public DiskSnapshot diskSnapshot;
    public GetDiskSnapshotResult withDiskSnapshot(DiskSnapshot diskSnapshot) {
        this.diskSnapshot = diskSnapshot;
        return this;
    }
}