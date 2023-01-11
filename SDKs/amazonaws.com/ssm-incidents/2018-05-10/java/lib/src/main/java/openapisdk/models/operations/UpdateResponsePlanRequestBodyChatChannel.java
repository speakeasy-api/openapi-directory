package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateResponsePlanRequestBodyChatChannel
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
public class UpdateResponsePlanRequestBodyChatChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatbotSns")
    public String[] chatbotSns;
    public UpdateResponsePlanRequestBodyChatChannel withChatbotSns(String[] chatbotSns) {
        this.chatbotSns = chatbotSns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("empty")
    public java.util.Map<String, Object> empty;
    public UpdateResponsePlanRequestBodyChatChannel withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
}