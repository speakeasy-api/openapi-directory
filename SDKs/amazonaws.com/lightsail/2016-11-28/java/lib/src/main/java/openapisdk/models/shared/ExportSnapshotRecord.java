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
 * ExportSnapshotRecord
 * Describes an export snapshot record.
**/
public class ExportSnapshotRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public ExportSnapshotRecord withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ExportSnapshotRecord withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationInfo")
    public DestinationInfo destinationInfo;
    public ExportSnapshotRecord withDestinationInfo(DestinationInfo destinationInfo) {
        this.destinationInfo = destinationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;
    public ExportSnapshotRecord withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ExportSnapshotRecord withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public ExportSnapshotRecord withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceInfo")
    public ExportSnapshotRecordSourceInfo sourceInfo;
    public ExportSnapshotRecord withSourceInfo(ExportSnapshotRecordSourceInfo sourceInfo) {
        this.sourceInfo = sourceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public RecordStateEnum state;
    public ExportSnapshotRecord withState(RecordStateEnum state) {
        this.state = state;
        return this;
    }
}