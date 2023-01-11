package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetWorkflowsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MissingWorkflows")
    public String[] missingWorkflows;
    public BatchGetWorkflowsResponse withMissingWorkflows(String[] missingWorkflows) {
        this.missingWorkflows = missingWorkflows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Workflows")
    public Workflow[] workflows;
    public BatchGetWorkflowsResponse withWorkflows(Workflow[] workflows) {
        this.workflows = workflows;
        return this;
    }
}