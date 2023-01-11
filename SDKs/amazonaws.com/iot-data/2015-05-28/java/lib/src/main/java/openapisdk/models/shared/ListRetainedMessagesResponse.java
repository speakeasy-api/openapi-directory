package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRetainedMessagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRetainedMessagesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retainedTopics")
    public RetainedMessageSummary[] retainedTopics;
    public ListRetainedMessagesResponse withRetainedTopics(RetainedMessageSummary[] retainedTopics) {
        this.retainedTopics = retainedTopics;
        return this;
    }
}