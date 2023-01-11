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
 * CreateReplicationTaskMessage
 * <p/>
**/
public class CreateReplicationTaskMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CdcStartPosition")
    public String cdcStartPosition;
    public CreateReplicationTaskMessage withCdcStartPosition(String cdcStartPosition) {
        this.cdcStartPosition = cdcStartPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CdcStartTime")
    public OffsetDateTime cdcStartTime;
    public CreateReplicationTaskMessage withCdcStartTime(OffsetDateTime cdcStartTime) {
        this.cdcStartTime = cdcStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CdcStopPosition")
    public String cdcStopPosition;
    public CreateReplicationTaskMessage withCdcStopPosition(String cdcStopPosition) {
        this.cdcStopPosition = cdcStopPosition;
        return this;
    }
    @JsonProperty("MigrationType")
    public MigrationTypeValueEnum migrationType;
    public CreateReplicationTaskMessage withMigrationType(MigrationTypeValueEnum migrationType) {
        this.migrationType = migrationType;
        return this;
    }
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public CreateReplicationTaskMessage withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
    @JsonProperty("ReplicationTaskIdentifier")
    public String replicationTaskIdentifier;
    public CreateReplicationTaskMessage withReplicationTaskIdentifier(String replicationTaskIdentifier) {
        this.replicationTaskIdentifier = replicationTaskIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskSettings")
    public String replicationTaskSettings;
    public CreateReplicationTaskMessage withReplicationTaskSettings(String replicationTaskSettings) {
        this.replicationTaskSettings = replicationTaskSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdentifier")
    public String resourceIdentifier;
    public CreateReplicationTaskMessage withResourceIdentifier(String resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
    @JsonProperty("SourceEndpointArn")
    public String sourceEndpointArn;
    public CreateReplicationTaskMessage withSourceEndpointArn(String sourceEndpointArn) {
        this.sourceEndpointArn = sourceEndpointArn;
        return this;
    }
    @JsonProperty("TableMappings")
    public String tableMappings;
    public CreateReplicationTaskMessage withTableMappings(String tableMappings) {
        this.tableMappings = tableMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateReplicationTaskMessage withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("TargetEndpointArn")
    public String targetEndpointArn;
    public CreateReplicationTaskMessage withTargetEndpointArn(String targetEndpointArn) {
        this.targetEndpointArn = targetEndpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskData")
    public String taskData;
    public CreateReplicationTaskMessage withTaskData(String taskData) {
        this.taskData = taskData;
        return this;
    }
}