package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PollForActivityTaskInput {
    @JsonProperty("domain")
    public String domain;
    public PollForActivityTaskInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public PollForActivityTaskInput withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonProperty("taskList")
    public TaskList taskList;
    public PollForActivityTaskInput withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
}