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
 * AutoSnapshotDetails
 * Describes an automatic snapshot.
**/
public class AutoSnapshotDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public AutoSnapshotDetails withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public AutoSnapshotDetails withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromAttachedDisks")
    public AttachedDisk[] fromAttachedDisks;
    public AutoSnapshotDetails withFromAttachedDisks(AttachedDisk[] fromAttachedDisks) {
        this.fromAttachedDisks = fromAttachedDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AutoSnapshotStatusEnum status;
    public AutoSnapshotDetails withStatus(AutoSnapshotStatusEnum status) {
        this.status = status;
        return this;
    }
}