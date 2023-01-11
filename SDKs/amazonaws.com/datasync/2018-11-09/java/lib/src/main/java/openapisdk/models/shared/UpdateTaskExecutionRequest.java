package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTaskExecutionRequest {
    @JsonProperty("Options")
    public Options options;
    public UpdateTaskExecutionRequest withOptions(Options options) {
        this.options = options;
        return this;
    }
    @JsonProperty("TaskExecutionArn")
    public String taskExecutionArn;
    public UpdateTaskExecutionRequest withTaskExecutionArn(String taskExecutionArn) {
        this.taskExecutionArn = taskExecutionArn;
        return this;
    }
}