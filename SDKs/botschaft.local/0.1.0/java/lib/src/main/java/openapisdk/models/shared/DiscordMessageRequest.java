package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DiscordMessageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base64_message")
    public String base64Message;
    public DiscordMessageRequest withBase64Message(String base64Message) {
        this.base64Message = base64Message;
        return this;
    }
    @JsonProperty("channel")
    public String channel;
    public DiscordMessageRequest withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DiscordMessageRequest withMessage(String message) {
        this.message = message;
        return this;
    }
}