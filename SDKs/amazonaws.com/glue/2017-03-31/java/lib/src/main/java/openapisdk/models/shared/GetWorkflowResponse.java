package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Workflow")
    public Workflow workflow;
    public GetWorkflowResponse withWorkflow(Workflow workflow) {
        this.workflow = workflow;
        return this;
    }
}