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
 * AuditMitigationActionsTaskMetadata
 * Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.
**/
public class AuditMitigationActionsTaskMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public AuditMitigationActionsTaskMetadata withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public AuditMitigationActionsTaskMetadata withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatus")
    public AuditMitigationActionsTaskStatusEnum taskStatus;
    public AuditMitigationActionsTaskMetadata withTaskStatus(AuditMitigationActionsTaskStatusEnum taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
}