package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DeleteApplicationSnapshotRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DeleteApplicationSnapshotRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("SnapshotCreationTimestamp")
    public OffsetDateTime snapshotCreationTimestamp;
    public DeleteApplicationSnapshotRequest withSnapshotCreationTimestamp(OffsetDateTime snapshotCreationTimestamp) {
        this.snapshotCreationTimestamp = snapshotCreationTimestamp;
        return this;
    }
    @JsonProperty("SnapshotName")
    public String snapshotName;
    public DeleteApplicationSnapshotRequest withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
}