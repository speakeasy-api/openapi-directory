package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSmsTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public UpdateSmsTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}