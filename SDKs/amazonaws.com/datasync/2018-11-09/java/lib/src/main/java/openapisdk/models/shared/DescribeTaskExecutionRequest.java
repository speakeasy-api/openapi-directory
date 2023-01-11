package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeTaskExecutionRequest
 * DescribeTaskExecutionRequest
**/
public class DescribeTaskExecutionRequest {
    @JsonProperty("TaskExecutionArn")
    public String taskExecutionArn;
    public DescribeTaskExecutionRequest withTaskExecutionArn(String taskExecutionArn) {
        this.taskExecutionArn = taskExecutionArn;
        return this;
    }
}