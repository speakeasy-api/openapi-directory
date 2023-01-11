package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteVoiceTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public DeleteVoiceTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}