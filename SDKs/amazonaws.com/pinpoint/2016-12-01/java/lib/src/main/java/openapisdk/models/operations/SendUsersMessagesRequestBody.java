package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendUsersMessagesRequestBody {
    @JsonProperty("SendUsersMessageRequest")
    public SendUsersMessagesRequestBodySendUsersMessageRequest sendUsersMessageRequest;
    public SendUsersMessagesRequestBody withSendUsersMessageRequest(SendUsersMessagesRequestBodySendUsersMessageRequest sendUsersMessageRequest) {
        this.sendUsersMessageRequest = sendUsersMessageRequest;
        return this;
    }
}