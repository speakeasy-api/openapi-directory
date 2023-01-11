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
 * ModifyReplicationTaskMessage
 * <p/>
**/
public class ModifyReplicationTaskMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CdcStartPosition")
    public String cdcStartPosition;
    public ModifyReplicationTaskMessage withCdcStartPosition(String cdcStartPosition) {
        this.cdcStartPosition = cdcStartPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CdcStartTime")
    public OffsetDateTime cdcStartTime;
    public ModifyReplicationTaskMessage withCdcStartTime(OffsetDateTime cdcStartTime) {
        this.cdcStartTime = cdcStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CdcStopPosition")
    public String cdcStopPosition;
    public ModifyReplicationTaskMessage withCdcStopPosition(String cdcStopPosition) {
        this.cdcStopPosition = cdcStopPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MigrationType")
    public MigrationTypeValueEnum migrationType;
    public ModifyReplicationTaskMessage withMigrationType(MigrationTypeValueEnum migrationType) {
        this.migrationType = migrationType;
        return this;
    }
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public ModifyReplicationTaskMessage withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskIdentifier")
    public String replicationTaskIdentifier;
    public ModifyReplicationTaskMessage withReplicationTaskIdentifier(String replicationTaskIdentifier) {
        this.replicationTaskIdentifier = replicationTaskIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskSettings")
    public String replicationTaskSettings;
    public ModifyReplicationTaskMessage withReplicationTaskSettings(String replicationTaskSettings) {
        this.replicationTaskSettings = replicationTaskSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableMappings")
    public String tableMappings;
    public ModifyReplicationTaskMessage withTableMappings(String tableMappings) {
        this.tableMappings = tableMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskData")
    public String taskData;
    public ModifyReplicationTaskMessage withTaskData(String taskData) {
        this.taskData = taskData;
        return this;
    }
}