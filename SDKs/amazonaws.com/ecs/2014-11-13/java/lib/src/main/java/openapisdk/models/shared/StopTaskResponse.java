package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public Task task;
    public StopTaskResponse withTask(Task task) {
        this.task = task;
        return this;
    }
}