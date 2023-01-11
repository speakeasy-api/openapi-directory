package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInAppTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public DeleteInAppTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}