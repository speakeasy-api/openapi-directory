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
 * SyncJobEntity
 * List Sync Jobs
**/
public class SyncJobEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folder_behavior_id")
    public Integer folderBehaviorId;
    public SyncJobEntity withFolderBehaviorId(Integer folderBehaviorId) {
        this.folderBehaviorId = folderBehaviorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("queued_at")
    public OffsetDateTime queuedAt;
    public SyncJobEntity withQueuedAt(OffsetDateTime queuedAt) {
        this.queuedAt = queuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regional_worker_status")
    public String regionalWorkerStatus;
    public SyncJobEntity withRegionalWorkerStatus(String regionalWorkerStatus) {
        this.regionalWorkerStatus = regionalWorkerStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public SyncJobEntity withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public SyncJobEntity withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public SyncJobEntity withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}