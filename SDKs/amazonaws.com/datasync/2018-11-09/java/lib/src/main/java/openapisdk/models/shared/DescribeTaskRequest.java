package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeTaskRequest
 * DescribeTaskRequest
**/
public class DescribeTaskRequest {
    @JsonProperty("TaskArn")
    public String taskArn;
    public DescribeTaskRequest withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
}