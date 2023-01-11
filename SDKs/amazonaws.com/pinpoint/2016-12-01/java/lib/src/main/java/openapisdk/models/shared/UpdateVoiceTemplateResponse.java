package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateVoiceTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public UpdateVoiceTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}