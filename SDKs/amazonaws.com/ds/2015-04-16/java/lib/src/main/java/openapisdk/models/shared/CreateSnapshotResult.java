package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSnapshotResult
 * Contains the results of the <a>CreateSnapshot</a> operation.
**/
public class CreateSnapshotResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotId")
    public String snapshotId;
    public CreateSnapshotResult withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}