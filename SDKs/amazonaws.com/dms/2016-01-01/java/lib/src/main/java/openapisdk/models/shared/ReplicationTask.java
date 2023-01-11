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
 * ReplicationTask
 * Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.
**/
public class ReplicationTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CdcStartPosition")
    public String cdcStartPosition;
    public ReplicationTask withCdcStartPosition(String cdcStartPosition) {
        this.cdcStartPosition = cdcStartPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CdcStopPosition")
    public String cdcStopPosition;
    public ReplicationTask withCdcStopPosition(String cdcStopPosition) {
        this.cdcStopPosition = cdcStopPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastFailureMessage")
    public String lastFailureMessage;
    public ReplicationTask withLastFailureMessage(String lastFailureMessage) {
        this.lastFailureMessage = lastFailureMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MigrationType")
    public MigrationTypeValueEnum migrationType;
    public ReplicationTask withMigrationType(MigrationTypeValueEnum migrationType) {
        this.migrationType = migrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecoveryCheckpoint")
    public String recoveryCheckpoint;
    public ReplicationTask withRecoveryCheckpoint(String recoveryCheckpoint) {
        this.recoveryCheckpoint = recoveryCheckpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public ReplicationTask withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public ReplicationTask withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplicationTaskCreationDate")
    public OffsetDateTime replicationTaskCreationDate;
    public ReplicationTask withReplicationTaskCreationDate(OffsetDateTime replicationTaskCreationDate) {
        this.replicationTaskCreationDate = replicationTaskCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskIdentifier")
    public String replicationTaskIdentifier;
    public ReplicationTask withReplicationTaskIdentifier(String replicationTaskIdentifier) {
        this.replicationTaskIdentifier = replicationTaskIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskSettings")
    public String replicationTaskSettings;
    public ReplicationTask withReplicationTaskSettings(String replicationTaskSettings) {
        this.replicationTaskSettings = replicationTaskSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplicationTaskStartDate")
    public OffsetDateTime replicationTaskStartDate;
    public ReplicationTask withReplicationTaskStartDate(OffsetDateTime replicationTaskStartDate) {
        this.replicationTaskStartDate = replicationTaskStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskStats")
    public ReplicationTaskStats replicationTaskStats;
    public ReplicationTask withReplicationTaskStats(ReplicationTaskStats replicationTaskStats) {
        this.replicationTaskStats = replicationTaskStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceEndpointArn")
    public String sourceEndpointArn;
    public ReplicationTask withSourceEndpointArn(String sourceEndpointArn) {
        this.sourceEndpointArn = sourceEndpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public ReplicationTask withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopReason")
    public String stopReason;
    public ReplicationTask withStopReason(String stopReason) {
        this.stopReason = stopReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableMappings")
    public String tableMappings;
    public ReplicationTask withTableMappings(String tableMappings) {
        this.tableMappings = tableMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetEndpointArn")
    public String targetEndpointArn;
    public ReplicationTask withTargetEndpointArn(String targetEndpointArn) {
        this.targetEndpointArn = targetEndpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetReplicationInstanceArn")
    public String targetReplicationInstanceArn;
    public ReplicationTask withTargetReplicationInstanceArn(String targetReplicationInstanceArn) {
        this.targetReplicationInstanceArn = targetReplicationInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskData")
    public String taskData;
    public ReplicationTask withTaskData(String taskData) {
        this.taskData = taskData;
        return this;
    }
}