package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChatHistoryUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public GetChatHistoryUsingGet200ApplicationJsonDataMessages[] messages;
    public GetChatHistoryUsingGet200ApplicationJsonData withMessages(GetChatHistoryUsingGet200ApplicationJsonDataMessages[] messages) {
        this.messages = messages;
        return this;
    }
}