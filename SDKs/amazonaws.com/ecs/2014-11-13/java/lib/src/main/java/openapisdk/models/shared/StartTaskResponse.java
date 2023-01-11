package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public Failure[] failures;
    public StartTaskResponse withFailures(Failure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public Task[] tasks;
    public StartTaskResponse withTasks(Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
}