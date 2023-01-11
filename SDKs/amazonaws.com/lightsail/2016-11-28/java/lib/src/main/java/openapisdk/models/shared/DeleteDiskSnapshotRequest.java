package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDiskSnapshotRequest {
    @JsonProperty("diskSnapshotName")
    public String diskSnapshotName;
    public DeleteDiskSnapshotRequest withDiskSnapshotName(String diskSnapshotName) {
        this.diskSnapshotName = diskSnapshotName;
        return this;
    }
}