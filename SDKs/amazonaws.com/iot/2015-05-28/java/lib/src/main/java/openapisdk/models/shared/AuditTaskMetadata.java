package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuditTaskMetadata
 * The audits that were performed.
**/
public class AuditTaskMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public AuditTaskMetadata withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatus")
    public AuditTaskStatusEnum taskStatus;
    public AuditTaskMetadata withTaskStatus(AuditTaskStatusEnum taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskType")
    public AuditTaskTypeEnum taskType;
    public AuditTaskMetadata withTaskType(AuditTaskTypeEnum taskType) {
        this.taskType = taskType;
        return this;
    }
}