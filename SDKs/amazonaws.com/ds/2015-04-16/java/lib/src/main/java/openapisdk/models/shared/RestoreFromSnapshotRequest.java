package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RestoreFromSnapshotRequest
 * An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.
**/
public class RestoreFromSnapshotRequest {
    @JsonProperty("SnapshotId")
    public String snapshotId;
    public RestoreFromSnapshotRequest withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}