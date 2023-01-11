package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExecutionsResponse {
    @JsonProperty("Executions")
    public ListedExecution[] executions;
    public ListExecutionsResponse withExecutions(ListedExecution[] executions) {
        this.executions = executions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListExecutionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("WorkflowId")
    public String workflowId;
    public ListExecutionsResponse withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}