package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkflowRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateWorkflowRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnExceptionSteps")
    public WorkflowStep[] onExceptionSteps;
    public CreateWorkflowRequest withOnExceptionSteps(WorkflowStep[] onExceptionSteps) {
        this.onExceptionSteps = onExceptionSteps;
        return this;
    }
    @JsonProperty("Steps")
    public WorkflowStep[] steps;
    public CreateWorkflowRequest withSteps(WorkflowStep[] steps) {
        this.steps = steps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateWorkflowRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}