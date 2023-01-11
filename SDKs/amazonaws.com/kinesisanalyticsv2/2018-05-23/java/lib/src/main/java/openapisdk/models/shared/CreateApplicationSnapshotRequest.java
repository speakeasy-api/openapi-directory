package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateApplicationSnapshotRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public CreateApplicationSnapshotRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("SnapshotName")
    public String snapshotName;
    public CreateApplicationSnapshotRequest withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
}