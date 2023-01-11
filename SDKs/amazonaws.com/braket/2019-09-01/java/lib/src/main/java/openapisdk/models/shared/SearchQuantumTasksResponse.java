package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchQuantumTasksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchQuantumTasksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("quantumTasks")
    public QuantumTaskSummary[] quantumTasks;
    public SearchQuantumTasksResponse withQuantumTasks(QuantumTaskSummary[] quantumTasks) {
        this.quantumTasks = quantumTasks;
        return this;
    }
}