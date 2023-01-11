package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnapshotLimits
 * Contains manual snapshot limit information for a directory.
**/
public class SnapshotLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManualSnapshotsCurrentCount")
    public Long manualSnapshotsCurrentCount;
    public SnapshotLimits withManualSnapshotsCurrentCount(Long manualSnapshotsCurrentCount) {
        this.manualSnapshotsCurrentCount = manualSnapshotsCurrentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManualSnapshotsLimit")
    public Long manualSnapshotsLimit;
    public SnapshotLimits withManualSnapshotsLimit(Long manualSnapshotsLimit) {
        this.manualSnapshotsLimit = manualSnapshotsLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManualSnapshotsLimitReached")
    public Boolean manualSnapshotsLimitReached;
    public SnapshotLimits withManualSnapshotsLimitReached(Boolean manualSnapshotsLimitReached) {
        this.manualSnapshotsLimitReached = manualSnapshotsLimitReached;
        return this;
    }
}