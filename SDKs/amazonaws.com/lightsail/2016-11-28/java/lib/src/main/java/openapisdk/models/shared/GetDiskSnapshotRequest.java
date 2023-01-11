package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDiskSnapshotRequest {
    @JsonProperty("diskSnapshotName")
    public String diskSnapshotName;
    public GetDiskSnapshotRequest withDiskSnapshotName(String diskSnapshotName) {
        this.diskSnapshotName = diskSnapshotName;
        return this;
    }
}