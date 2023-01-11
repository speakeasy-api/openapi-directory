package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeApplicationSnapshotResponse {
    @JsonProperty("SnapshotDetails")
    public SnapshotDetails snapshotDetails;
    public DescribeApplicationSnapshotResponse withSnapshotDetails(SnapshotDetails snapshotDetails) {
        this.snapshotDetails = snapshotDetails;
        return this;
    }
}