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
 * WorkflowRun
 * A workflow run is an execution of a workflow providing all the runtime information.
**/
public class WorkflowRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletedOn")
    public OffsetDateTime completedOn;
    public WorkflowRun withCompletedOn(OffsetDateTime completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public WorkflowRun withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Graph")
    public WorkflowGraph graph;
    public WorkflowRun withGraph(WorkflowGraph graph) {
        this.graph = graph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public WorkflowRun withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviousRunId")
    public String previousRunId;
    public WorkflowRun withPreviousRunId(String previousRunId) {
        this.previousRunId = previousRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedOn")
    public OffsetDateTime startedOn;
    public WorkflowRun withStartedOn(OffsetDateTime startedOn) {
        this.startedOn = startedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartingEventBatchCondition")
    public StartingEventBatchCondition startingEventBatchCondition;
    public WorkflowRun withStartingEventBatchCondition(StartingEventBatchCondition startingEventBatchCondition) {
        this.startingEventBatchCondition = startingEventBatchCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Statistics")
    public WorkflowRunStatistics statistics;
    public WorkflowRun withStatistics(WorkflowRunStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public WorkflowRunStatusEnum status;
    public WorkflowRun withStatus(WorkflowRunStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowRunId")
    public String workflowRunId;
    public WorkflowRun withWorkflowRunId(String workflowRunId) {
        this.workflowRunId = workflowRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowRunProperties")
    public java.util.Map<String, String> workflowRunProperties;
    public WorkflowRun withWorkflowRunProperties(java.util.Map<String, String> workflowRunProperties) {
        this.workflowRunProperties = workflowRunProperties;
        return this;
    }
}