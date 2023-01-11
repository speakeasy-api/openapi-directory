package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTemplateActiveVersionResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public UpdateTemplateActiveVersionResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}