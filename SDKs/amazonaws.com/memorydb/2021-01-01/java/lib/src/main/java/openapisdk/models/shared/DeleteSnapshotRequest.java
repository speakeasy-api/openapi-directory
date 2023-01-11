package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSnapshotRequest {
    @JsonProperty("SnapshotName")
    public String snapshotName;
    public DeleteSnapshotRequest withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
}