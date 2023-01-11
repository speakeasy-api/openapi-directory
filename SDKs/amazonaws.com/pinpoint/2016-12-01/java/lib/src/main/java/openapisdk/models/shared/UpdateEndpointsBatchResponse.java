package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEndpointsBatchResponse {
    @JsonProperty("MessageBody")
    public MessageBody messageBody;
    public UpdateEndpointsBatchResponse withMessageBody(MessageBody messageBody) {
        this.messageBody = messageBody;
        return this;
    }
}