package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeApplicationSnapshotRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DescribeApplicationSnapshotRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("SnapshotName")
    public String snapshotName;
    public DescribeApplicationSnapshotRequest withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
}