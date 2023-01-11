package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendMessagesResponse {
    @JsonProperty("MessageResponse")
    public MessageResponse messageResponse;
    public SendMessagesResponse withMessageResponse(MessageResponse messageResponse) {
        this.messageResponse = messageResponse;
        return this;
    }
}