package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListedWorkflow
 * Contains the ID, text description, and Amazon Resource Name (ARN) for the workflow.
**/
public class ListedWorkflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public ListedWorkflow withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ListedWorkflow withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkflowId")
    public String workflowId;
    public ListedWorkflow withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}