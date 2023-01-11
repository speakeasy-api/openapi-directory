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
 * ReplicationRun
 * Represents a replication run.
**/
public class ReplicationRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amiId")
    public String amiId;
    public ReplicationRun withAmiId(String amiId) {
        this.amiId = amiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completedTime")
    public OffsetDateTime completedTime;
    public ReplicationRun withCompletedTime(OffsetDateTime completedTime) {
        this.completedTime = completedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReplicationRun withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encrypted")
    public Boolean encrypted;
    public ReplicationRun withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyId")
    public String kmsKeyId;
    public ReplicationRun withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationRunId")
    public String replicationRunId;
    public ReplicationRun withReplicationRunId(String replicationRunId) {
        this.replicationRunId = replicationRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduledStartTime")
    public OffsetDateTime scheduledStartTime;
    public ReplicationRun withScheduledStartTime(OffsetDateTime scheduledStartTime) {
        this.scheduledStartTime = scheduledStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stageDetails")
    public ReplicationRunStageDetails stageDetails;
    public ReplicationRun withStageDetails(ReplicationRunStageDetails stageDetails) {
        this.stageDetails = stageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ReplicationRunStateEnum state;
    public ReplicationRun withState(ReplicationRunStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public ReplicationRun withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ReplicationRunTypeEnum type;
    public ReplicationRun withType(ReplicationRunTypeEnum type) {
        this.type = type;
        return this;
    }
}