package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExecutionsOutput {
    @JsonProperty("executions")
    public ExecutionListItem[] executions;
    public ListExecutionsOutput withExecutions(ExecutionListItem[] executions) {
        this.executions = executions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListExecutionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}