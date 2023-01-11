package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteSnapshotResult
 * Contains the results of the <a>DeleteSnapshot</a> operation.
**/
public class DeleteSnapshotResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotId")
    public String snapshotId;
    public DeleteSnapshotResult withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}