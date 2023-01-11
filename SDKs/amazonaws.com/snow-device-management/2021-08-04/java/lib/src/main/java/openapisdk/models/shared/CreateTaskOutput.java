package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTaskOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskArn")
    public String taskArn;
    public CreateTaskOutput withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public CreateTaskOutput withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}