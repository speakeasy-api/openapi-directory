package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInstanceSnapshotRequest {
    @JsonProperty("instanceSnapshotName")
    public String instanceSnapshotName;
    public DeleteInstanceSnapshotRequest withInstanceSnapshotName(String instanceSnapshotName) {
        this.instanceSnapshotName = instanceSnapshotName;
        return this;
    }
}