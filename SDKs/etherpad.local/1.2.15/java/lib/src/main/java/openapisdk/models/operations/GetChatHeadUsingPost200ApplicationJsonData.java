package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChatHeadUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatHead")
    public GetChatHeadUsingPost200ApplicationJsonDataChatHead chatHead;
    public GetChatHeadUsingPost200ApplicationJsonData withChatHead(GetChatHeadUsingPost200ApplicationJsonDataChatHead chatHead) {
        this.chatHead = chatHead;
        return this;
    }
}