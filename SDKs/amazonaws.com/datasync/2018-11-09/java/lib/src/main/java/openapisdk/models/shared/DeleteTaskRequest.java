package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteTaskRequest
 * DeleteTask
**/
public class DeleteTaskRequest {
    @JsonProperty("TaskArn")
    public String taskArn;
    public DeleteTaskRequest withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
}