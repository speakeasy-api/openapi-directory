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
 * ExternalEventEntity
 * List External Events
**/
public class ExternalEventEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public ExternalEventEntity withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_url")
    public String bodyUrl;
    public ExternalEventEntity withBodyUrl(String bodyUrl) {
        this.bodyUrl = bodyUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytes_synced")
    public Integer bytesSynced;
    public ExternalEventEntity withBytesSynced(Integer bytesSynced) {
        this.bytesSynced = bytesSynced;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ExternalEventEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errored_files")
    public Integer erroredFiles;
    public ExternalEventEntity withErroredFiles(Integer erroredFiles) {
        this.erroredFiles = erroredFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_type")
    public ExternalEventEntityEventTypeEnum eventType;
    public ExternalEventEntity withEventType(ExternalEventEntityEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folder_behavior_id")
    public Integer folderBehaviorId;
    public ExternalEventEntity withFolderBehaviorId(Integer folderBehaviorId) {
        this.folderBehaviorId = folderBehaviorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ExternalEventEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_server_type")
    public String remoteServerType;
    public ExternalEventEntity withRemoteServerType(String remoteServerType) {
        this.remoteServerType = remoteServerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ExternalEventEntityStatusEnum status;
    public ExternalEventEntity withStatus(ExternalEventEntityStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successful_files")
    public Integer successfulFiles;
    public ExternalEventEntity withSuccessfulFiles(Integer successfulFiles) {
        this.successfulFiles = successfulFiles;
        return this;
    }
}