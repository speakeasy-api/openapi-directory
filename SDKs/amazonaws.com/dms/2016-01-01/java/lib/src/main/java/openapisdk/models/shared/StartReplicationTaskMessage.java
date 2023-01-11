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
 * StartReplicationTaskMessage
 * <p/>
**/
public class StartReplicationTaskMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CdcStartPosition")
    public String cdcStartPosition;
    public StartReplicationTaskMessage withCdcStartPosition(String cdcStartPosition) {
        this.cdcStartPosition = cdcStartPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CdcStartTime")
    public OffsetDateTime cdcStartTime;
    public StartReplicationTaskMessage withCdcStartTime(OffsetDateTime cdcStartTime) {
        this.cdcStartTime = cdcStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CdcStopPosition")
    public String cdcStopPosition;
    public StartReplicationTaskMessage withCdcStopPosition(String cdcStopPosition) {
        this.cdcStopPosition = cdcStopPosition;
        return this;
    }
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public StartReplicationTaskMessage withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonProperty("StartReplicationTaskType")
    public StartReplicationTaskTypeValueEnum startReplicationTaskType;
    public StartReplicationTaskMessage withStartReplicationTaskType(StartReplicationTaskTypeValueEnum startReplicationTaskType) {
        this.startReplicationTaskType = startReplicationTaskType;
        return this;
    }
}