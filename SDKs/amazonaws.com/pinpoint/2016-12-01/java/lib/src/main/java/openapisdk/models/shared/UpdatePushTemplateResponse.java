package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePushTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public UpdatePushTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}