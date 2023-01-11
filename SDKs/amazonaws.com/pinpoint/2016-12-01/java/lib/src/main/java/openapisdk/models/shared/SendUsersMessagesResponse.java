package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendUsersMessagesResponse {
    @JsonProperty("SendUsersMessageResponse")
    public SendUsersMessageResponse sendUsersMessageResponse;
    public SendUsersMessagesResponse withSendUsersMessageResponse(SendUsersMessageResponse sendUsersMessageResponse) {
        this.sendUsersMessageResponse = sendUsersMessageResponse;
        return this;
    }
}