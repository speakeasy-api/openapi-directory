package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInstanceSnapshotRequest {
    @JsonProperty("instanceSnapshotName")
    public String instanceSnapshotName;
    public GetInstanceSnapshotRequest withInstanceSnapshotName(String instanceSnapshotName) {
        this.instanceSnapshotName = instanceSnapshotName;
        return this;
    }
}