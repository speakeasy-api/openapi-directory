package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChatHeadUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatHead")
    public GetChatHeadUsingGet200ApplicationJsonDataChatHead chatHead;
    public GetChatHeadUsingGet200ApplicationJsonData withChatHead(GetChatHeadUsingGet200ApplicationJsonDataChatHead chatHead) {
        this.chatHead = chatHead;
        return this;
    }
}