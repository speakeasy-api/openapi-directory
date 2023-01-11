package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartNextPendingJobExecutionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("execution")
    public JobExecution execution;
    public StartNextPendingJobExecutionResponse withExecution(JobExecution execution) {
        this.execution = execution;
        return this;
    }
}