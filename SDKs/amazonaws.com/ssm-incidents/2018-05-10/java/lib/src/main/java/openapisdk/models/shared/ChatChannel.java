package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChatChannel
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
public class ChatChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatbotSns")
    public String[] chatbotSns;
    public ChatChannel withChatbotSns(String[] chatbotSns) {
        this.chatbotSns = chatbotSns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("empty")
    public java.util.Map<String, Object> empty;
    public ChatChannel withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
}