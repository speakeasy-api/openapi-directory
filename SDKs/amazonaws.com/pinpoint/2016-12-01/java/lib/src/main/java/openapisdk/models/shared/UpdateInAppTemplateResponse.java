package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateInAppTemplateResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public UpdateInAppTemplateResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}