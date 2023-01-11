package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePushTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public DeletePushTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}