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
 * WorkflowExecutionInfo
 * Contains information about a workflow execution.
**/
public class WorkflowExecutionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelRequested")
    public Boolean cancelRequested;
    public WorkflowExecutionInfo withCancelRequested(Boolean cancelRequested) {
        this.cancelRequested = cancelRequested;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeStatus")
    public CloseStatusEnum closeStatus;
    public WorkflowExecutionInfo withCloseStatus(CloseStatusEnum closeStatus) {
        this.closeStatus = closeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("closeTimestamp")
    public OffsetDateTime closeTimestamp;
    public WorkflowExecutionInfo withCloseTimestamp(OffsetDateTime closeTimestamp) {
        this.closeTimestamp = closeTimestamp;
        return this;
    }
    @JsonProperty("execution")
    public WorkflowExecution execution;
    public WorkflowExecutionInfo withExecution(WorkflowExecution execution) {
        this.execution = execution;
        return this;
    }
    @JsonProperty("executionStatus")
    public ExecutionStatusEnum executionStatus;
    public WorkflowExecutionInfo withExecutionStatus(ExecutionStatusEnum executionStatus) {
        this.executionStatus = executionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public WorkflowExecution parent;
    public WorkflowExecutionInfo withParent(WorkflowExecution parent) {
        this.parent = parent;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTimestamp")
    public OffsetDateTime startTimestamp;
    public WorkflowExecutionInfo withStartTimestamp(OffsetDateTime startTimestamp) {
        this.startTimestamp = startTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagList")
    public String[] tagList;
    public WorkflowExecutionInfo withTagList(String[] tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public WorkflowExecutionInfo withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}