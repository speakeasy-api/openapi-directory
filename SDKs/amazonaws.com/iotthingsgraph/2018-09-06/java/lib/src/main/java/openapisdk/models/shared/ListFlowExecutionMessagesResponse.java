package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFlowExecutionMessagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public FlowExecutionMessage[] messages;
    public ListFlowExecutionMessagesResponse withMessages(FlowExecutionMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFlowExecutionMessagesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}