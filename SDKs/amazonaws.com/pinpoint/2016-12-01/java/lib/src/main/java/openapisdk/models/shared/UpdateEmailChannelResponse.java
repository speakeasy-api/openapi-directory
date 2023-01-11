package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEmailChannelResponse {
    @JsonProperty("EmailChannelResponse")
    public EmailChannelResponse emailChannelResponse;
    public UpdateEmailChannelResponse withEmailChannelResponse(EmailChannelResponse emailChannelResponse) {
        this.emailChannelResponse = emailChannelResponse;
        return this;
    }
}