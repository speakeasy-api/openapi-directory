package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteSnapshotRequest
 * Contains the inputs for the <a>DeleteSnapshot</a> operation.
**/
public class DeleteSnapshotRequest {
    @JsonProperty("SnapshotId")
    public String snapshotId;
    public DeleteSnapshotRequest withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}