package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PollForDecisionTaskInput {
    @JsonProperty("domain")
    public String domain;
    public PollForDecisionTaskInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public PollForDecisionTaskInput withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPageSize")
    public Long maximumPageSize;
    public PollForDecisionTaskInput withMaximumPageSize(Long maximumPageSize) {
        this.maximumPageSize = maximumPageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public PollForDecisionTaskInput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseOrder")
    public Boolean reverseOrder;
    public PollForDecisionTaskInput withReverseOrder(Boolean reverseOrder) {
        this.reverseOrder = reverseOrder;
        return this;
    }
    @JsonProperty("taskList")
    public TaskList taskList;
    public PollForDecisionTaskInput withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
}