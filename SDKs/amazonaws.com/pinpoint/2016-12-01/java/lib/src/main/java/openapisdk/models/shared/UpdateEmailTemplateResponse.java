package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEmailTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public UpdateEmailTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}