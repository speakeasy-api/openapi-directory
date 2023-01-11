package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSmsTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public DeleteSmsTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}