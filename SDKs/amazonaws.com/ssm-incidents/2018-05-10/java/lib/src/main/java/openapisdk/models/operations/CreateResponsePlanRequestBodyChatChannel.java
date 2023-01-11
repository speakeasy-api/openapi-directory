package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateResponsePlanRequestBodyChatChannel
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
public class CreateResponsePlanRequestBodyChatChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatbotSns")
    public String[] chatbotSns;
    public CreateResponsePlanRequestBodyChatChannel withChatbotSns(String[] chatbotSns) {
        this.chatbotSns = chatbotSns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("empty")
    public java.util.Map<String, Object> empty;
    public CreateResponsePlanRequestBodyChatChannel withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
}