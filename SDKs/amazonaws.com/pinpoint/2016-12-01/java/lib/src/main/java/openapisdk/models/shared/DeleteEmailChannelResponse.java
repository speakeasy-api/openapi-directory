package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEmailChannelResponse {
    @JsonProperty("EmailChannelResponse")
    public EmailChannelResponse emailChannelResponse;
    public DeleteEmailChannelResponse withEmailChannelResponse(EmailChannelResponse emailChannelResponse) {
        this.emailChannelResponse = emailChannelResponse;
        return this;
    }
}