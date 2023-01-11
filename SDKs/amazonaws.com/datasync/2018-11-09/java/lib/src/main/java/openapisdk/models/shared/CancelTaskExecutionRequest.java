package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CancelTaskExecutionRequest
 * CancelTaskExecutionRequest
**/
public class CancelTaskExecutionRequest {
    @JsonProperty("TaskExecutionArn")
    public String taskExecutionArn;
    public CancelTaskExecutionRequest withTaskExecutionArn(String taskExecutionArn) {
        this.taskExecutionArn = taskExecutionArn;
        return this;
    }
}