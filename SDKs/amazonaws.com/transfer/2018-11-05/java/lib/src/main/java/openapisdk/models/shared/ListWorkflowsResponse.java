package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorkflowsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListWorkflowsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("Workflows")
    public ListedWorkflow[] workflows;
    public ListWorkflowsResponse withWorkflows(ListedWorkflow[] workflows) {
        this.workflows = workflows;
        return this;
    }
}