package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTaskResponse
 * CreateTaskResponse
**/
public class CreateTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskArn")
    public String taskArn;
    public CreateTaskResponse withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
}