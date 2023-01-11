package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEndpointResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public UpdateEndpointResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}