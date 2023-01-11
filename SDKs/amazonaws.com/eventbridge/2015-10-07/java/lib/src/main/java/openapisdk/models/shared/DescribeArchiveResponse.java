package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeArchiveResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchiveArn")
    public String archiveArn;
    public DescribeArchiveResponse withArchiveArn(String archiveArn) {
        this.archiveArn = archiveArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchiveName")
    public String archiveName;
    public DescribeArchiveResponse withArchiveName(String archiveName) {
        this.archiveName = archiveName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeArchiveResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public DescribeArchiveResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventCount")
    public Long eventCount;
    public DescribeArchiveResponse withEventCount(Long eventCount) {
        this.eventCount = eventCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventPattern")
    public String eventPattern;
    public DescribeArchiveResponse withEventPattern(String eventPattern) {
        this.eventPattern = eventPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public DescribeArchiveResponse withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionDays")
    public Long retentionDays;
    public DescribeArchiveResponse withRetentionDays(Long retentionDays) {
        this.retentionDays = retentionDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeBytes")
    public Long sizeBytes;
    public DescribeArchiveResponse withSizeBytes(Long sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ArchiveStateEnum state;
    public DescribeArchiveResponse withState(ArchiveStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public DescribeArchiveResponse withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
}