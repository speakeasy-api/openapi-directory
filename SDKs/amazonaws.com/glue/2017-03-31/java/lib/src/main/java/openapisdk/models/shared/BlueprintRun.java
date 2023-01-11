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
 * BlueprintRun
 * The details of a blueprint run.
**/
public class BlueprintRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintName")
    public String blueprintName;
    public BlueprintRun withBlueprintName(String blueprintName) {
        this.blueprintName = blueprintName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletedOn")
    public OffsetDateTime completedOn;
    public BlueprintRun withCompletedOn(OffsetDateTime completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public BlueprintRun withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public String parameters;
    public BlueprintRun withParameters(String parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public BlueprintRun withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RollbackErrorMessage")
    public String rollbackErrorMessage;
    public BlueprintRun withRollbackErrorMessage(String rollbackErrorMessage) {
        this.rollbackErrorMessage = rollbackErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunId")
    public String runId;
    public BlueprintRun withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedOn")
    public OffsetDateTime startedOn;
    public BlueprintRun withStartedOn(OffsetDateTime startedOn) {
        this.startedOn = startedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public BlueprintRunStateEnum state;
    public BlueprintRun withState(BlueprintRunStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowName")
    public String workflowName;
    public BlueprintRun withWorkflowName(String workflowName) {
        this.workflowName = workflowName;
        return this;
    }
}