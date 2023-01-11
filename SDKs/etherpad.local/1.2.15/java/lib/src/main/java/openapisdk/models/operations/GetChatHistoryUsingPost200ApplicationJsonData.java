package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChatHistoryUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public GetChatHistoryUsingPost200ApplicationJsonDataMessages[] messages;
    public GetChatHistoryUsingPost200ApplicationJsonData withMessages(GetChatHistoryUsingPost200ApplicationJsonDataMessages[] messages) {
        this.messages = messages;
        return this;
    }
}