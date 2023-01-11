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
 * AuditMitigationActionExecutionMetadata
 * Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.
**/
public class AuditMitigationActionExecutionMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionId")
    public String actionId;
    public AuditMitigationActionExecutionMetadata withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionName")
    public String actionName;
    public AuditMitigationActionExecutionMetadata withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public AuditMitigationActionExecutionMetadata withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public AuditMitigationActionExecutionMetadata withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingId")
    public String findingId;
    public AuditMitigationActionExecutionMetadata withFindingId(String findingId) {
        this.findingId = findingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AuditMitigationActionExecutionMetadata withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public AuditMitigationActionExecutionMetadata withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AuditMitigationActionsExecutionStatusEnum status;
    public AuditMitigationActionExecutionMetadata withStatus(AuditMitigationActionsExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public AuditMitigationActionExecutionMetadata withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}