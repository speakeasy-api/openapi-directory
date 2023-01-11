package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTaskSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSet")
    public TaskSet taskSet;
    public CreateTaskSetResponse withTaskSet(TaskSet taskSet) {
        this.taskSet = taskSet;
        return this;
    }
}