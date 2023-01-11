package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExportSnapshotRequest {
    @JsonProperty("sourceSnapshotName")
    public String sourceSnapshotName;
    public ExportSnapshotRequest withSourceSnapshotName(String sourceSnapshotName) {
        this.sourceSnapshotName = sourceSnapshotName;
        return this;
    }
}