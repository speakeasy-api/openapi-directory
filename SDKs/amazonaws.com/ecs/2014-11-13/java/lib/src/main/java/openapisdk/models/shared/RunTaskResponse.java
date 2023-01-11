package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public Failure[] failures;
    public RunTaskResponse withFailures(Failure[] failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public Task[] tasks;
    public RunTaskResponse withTasks(Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
}