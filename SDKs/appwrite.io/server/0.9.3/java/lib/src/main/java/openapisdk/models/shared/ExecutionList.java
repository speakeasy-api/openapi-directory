package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecutionList
 * Executions List
**/
public class ExecutionList {
    @JsonProperty("executions")
    public Execution[] executions;
    public ExecutionList withExecutions(Execution[] executions) {
        this.executions = executions;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public ExecutionList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}