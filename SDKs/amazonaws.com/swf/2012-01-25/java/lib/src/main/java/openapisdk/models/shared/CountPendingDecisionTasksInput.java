package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CountPendingDecisionTasksInput {
    @JsonProperty("domain")
    public String domain;
    public CountPendingDecisionTasksInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("taskList")
    public TaskList taskList;
    public CountPendingDecisionTasksInput withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
}