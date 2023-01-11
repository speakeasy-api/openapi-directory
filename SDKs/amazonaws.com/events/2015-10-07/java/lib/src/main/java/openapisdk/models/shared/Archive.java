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
 * Archive
 * An <code>Archive</code> object that contains details about an archive.
**/
public class Archive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchiveName")
    public String archiveName;
    public Archive withArchiveName(String archiveName) {
        this.archiveName = archiveName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public Archive withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventCount")
    public Long eventCount;
    public Archive withEventCount(Long eventCount) {
        this.eventCount = eventCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public Archive withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionDays")
    public Long retentionDays;
    public Archive withRetentionDays(Long retentionDays) {
        this.retentionDays = retentionDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeBytes")
    public Long sizeBytes;
    public Archive withSizeBytes(Long sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ArchiveStateEnum state;
    public Archive withState(ArchiveStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public Archive withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
}