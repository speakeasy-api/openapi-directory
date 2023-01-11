package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartTaskExecutionResponse
 * StartTaskExecutionResponse
**/
public class StartTaskExecutionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskExecutionArn")
    public String taskExecutionArn;
    public StartTaskExecutionResponse withTaskExecutionArn(String taskExecutionArn) {
        this.taskExecutionArn = taskExecutionArn;
        return this;
    }
}