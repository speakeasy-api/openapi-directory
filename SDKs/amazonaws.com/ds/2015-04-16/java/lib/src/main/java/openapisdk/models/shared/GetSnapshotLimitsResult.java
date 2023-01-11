package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSnapshotLimitsResult
 * Contains the results of the <a>GetSnapshotLimits</a> operation.
**/
public class GetSnapshotLimitsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotLimits")
    public SnapshotLimits snapshotLimits;
    public GetSnapshotLimitsResult withSnapshotLimits(SnapshotLimits snapshotLimits) {
        this.snapshotLimits = snapshotLimits;
        return this;
    }
}