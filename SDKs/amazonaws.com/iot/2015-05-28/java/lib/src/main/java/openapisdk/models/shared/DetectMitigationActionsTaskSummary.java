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
 * DetectMitigationActionsTaskSummary
 *  The summary of the mitigation action tasks. 
**/
public class DetectMitigationActionsTaskSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionsDefinition")
    public MitigationAction[] actionsDefinition;
    public DetectMitigationActionsTaskSummary withActionsDefinition(MitigationAction[] actionsDefinition) {
        this.actionsDefinition = actionsDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onlyActiveViolationsIncluded")
    public Boolean onlyActiveViolationsIncluded;
    public DetectMitigationActionsTaskSummary withOnlyActiveViolationsIncluded(Boolean onlyActiveViolationsIncluded) {
        this.onlyActiveViolationsIncluded = onlyActiveViolationsIncluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressedAlertsIncluded")
    public Boolean suppressedAlertsIncluded;
    public DetectMitigationActionsTaskSummary withSuppressedAlertsIncluded(Boolean suppressedAlertsIncluded) {
        this.suppressedAlertsIncluded = suppressedAlertsIncluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public DetectMitigationActionsTaskTarget target;
    public DetectMitigationActionsTaskSummary withTarget(DetectMitigationActionsTaskTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("taskEndTime")
    public OffsetDateTime taskEndTime;
    public DetectMitigationActionsTaskSummary withTaskEndTime(OffsetDateTime taskEndTime) {
        this.taskEndTime = taskEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public DetectMitigationActionsTaskSummary withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("taskStartTime")
    public OffsetDateTime taskStartTime;
    public DetectMitigationActionsTaskSummary withTaskStartTime(OffsetDateTime taskStartTime) {
        this.taskStartTime = taskStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatistics")
    public DetectMitigationActionsTaskStatistics taskStatistics;
    public DetectMitigationActionsTaskSummary withTaskStatistics(DetectMitigationActionsTaskStatistics taskStatistics) {
        this.taskStatistics = taskStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatus")
    public DetectMitigationActionsTaskStatusEnum taskStatus;
    public DetectMitigationActionsTaskSummary withTaskStatus(DetectMitigationActionsTaskStatusEnum taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationEventOccurrenceRange")
    public ViolationEventOccurrenceRange violationEventOccurrenceRange;
    public DetectMitigationActionsTaskSummary withViolationEventOccurrenceRange(ViolationEventOccurrenceRange violationEventOccurrenceRange) {
        this.violationEventOccurrenceRange = violationEventOccurrenceRange;
        return this;
    }
}