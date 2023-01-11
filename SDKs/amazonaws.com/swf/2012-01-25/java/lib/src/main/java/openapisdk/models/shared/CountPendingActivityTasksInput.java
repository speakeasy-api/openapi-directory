package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CountPendingActivityTasksInput {
    @JsonProperty("domain")
    public String domain;
    public CountPendingActivityTasksInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("taskList")
    public TaskList taskList;
    public CountPendingActivityTasksInput withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
}