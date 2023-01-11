package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SlackMessageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base64_message")
    public String base64Message;
    public SlackMessageRequest withBase64Message(String base64Message) {
        this.base64Message = base64Message;
        return this;
    }
    @JsonProperty("channel")
    public String channel;
    public SlackMessageRequest withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public SlackMessageRequest withMessage(String message) {
        this.message = message;
        return this;
    }
}