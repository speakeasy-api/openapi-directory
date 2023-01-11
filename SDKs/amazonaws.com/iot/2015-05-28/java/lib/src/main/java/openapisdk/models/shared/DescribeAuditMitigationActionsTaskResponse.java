package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeAuditMitigationActionsTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionsDefinition")
    public MitigationAction[] actionsDefinition;
    public DescribeAuditMitigationActionsTaskResponse withActionsDefinition(MitigationAction[] actionsDefinition) {
        this.actionsDefinition = actionsDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditCheckToActionsMapping")
    public java.util.Map<String, String[]> auditCheckToActionsMapping;
    public DescribeAuditMitigationActionsTaskResponse withAuditCheckToActionsMapping(java.util.Map<String, String[]> auditCheckToActionsMapping) {
        this.auditCheckToActionsMapping = auditCheckToActionsMapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public DescribeAuditMitigationActionsTaskResponse withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public DescribeAuditMitigationActionsTaskResponse withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public AuditMitigationActionsTaskTarget target;
    public DescribeAuditMitigationActionsTaskResponse withTarget(AuditMitigationActionsTaskTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatistics")
    public java.util.Map<String, TaskStatisticsForAuditCheck> taskStatistics;
    public DescribeAuditMitigationActionsTaskResponse withTaskStatistics(java.util.Map<String, TaskStatisticsForAuditCheck> taskStatistics) {
        this.taskStatistics = taskStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatus")
    public AuditMitigationActionsTaskStatusEnum taskStatus;
    public DescribeAuditMitigationActionsTaskResponse withTaskStatus(AuditMitigationActionsTaskStatusEnum taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
}