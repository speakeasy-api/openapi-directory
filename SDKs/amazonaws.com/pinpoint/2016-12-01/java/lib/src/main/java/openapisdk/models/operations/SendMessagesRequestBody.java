package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendMessagesRequestBody {
    @JsonProperty("MessageRequest")
    public SendMessagesRequestBodyMessageRequest messageRequest;
    public SendMessagesRequestBody withMessageRequest(SendMessagesRequestBodyMessageRequest messageRequest) {
        this.messageRequest = messageRequest;
        return this;
    }
}