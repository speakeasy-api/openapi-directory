package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TwilioMessageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base64_message")
    public String base64Message;
    public TwilioMessageRequest withBase64Message(String base64Message) {
        this.base64Message = base64Message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public TwilioMessageRequest withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public TwilioMessageRequest withTo(String to) {
        this.to = to;
        return this;
    }
}