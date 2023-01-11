package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SnapshotDetails
 * Provides details about a snapshot of application state.
**/
public class SnapshotDetails {
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public SnapshotDetails withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SnapshotCreationTimestamp")
    public OffsetDateTime snapshotCreationTimestamp;
    public SnapshotDetails withSnapshotCreationTimestamp(OffsetDateTime snapshotCreationTimestamp) {
        this.snapshotCreationTimestamp = snapshotCreationTimestamp;
        return this;
    }
    @JsonProperty("SnapshotName")
    public String snapshotName;
    public SnapshotDetails withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
    @JsonProperty("SnapshotStatus")
    public SnapshotStatusEnum snapshotStatus;
    public SnapshotDetails withSnapshotStatus(SnapshotStatusEnum snapshotStatus) {
        this.snapshotStatus = snapshotStatus;
        return this;
    }
}