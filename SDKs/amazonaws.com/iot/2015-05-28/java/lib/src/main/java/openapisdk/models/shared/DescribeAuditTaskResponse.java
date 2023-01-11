package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeAuditTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditDetails")
    public java.util.Map<String, AuditCheckDetails> auditDetails;
    public DescribeAuditTaskResponse withAuditDetails(java.util.Map<String, AuditCheckDetails> auditDetails) {
        this.auditDetails = auditDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledAuditName")
    public String scheduledAuditName;
    public DescribeAuditTaskResponse withScheduledAuditName(String scheduledAuditName) {
        this.scheduledAuditName = scheduledAuditName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("taskStartTime")
    public OffsetDateTime taskStartTime;
    public DescribeAuditTaskResponse withTaskStartTime(OffsetDateTime taskStartTime) {
        this.taskStartTime = taskStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatistics")
    public TaskStatistics taskStatistics;
    public DescribeAuditTaskResponse withTaskStatistics(TaskStatistics taskStatistics) {
        this.taskStatistics = taskStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatus")
    public AuditTaskStatusEnum taskStatus;
    public DescribeAuditTaskResponse withTaskStatus(AuditTaskStatusEnum taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskType")
    public AuditTaskTypeEnum taskType;
    public DescribeAuditTaskResponse withTaskType(AuditTaskTypeEnum taskType) {
        this.taskType = taskType;
        return this;
    }
}