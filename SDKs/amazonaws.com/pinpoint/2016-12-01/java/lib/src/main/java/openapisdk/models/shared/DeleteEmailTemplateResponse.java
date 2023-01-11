package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEmailTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public DeleteEmailTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}