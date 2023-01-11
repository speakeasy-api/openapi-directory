package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEmailChannelResponse {
    @JsonProperty("EmailChannelResponse")
    public EmailChannelResponse emailChannelResponse;
    public GetEmailChannelResponse withEmailChannelResponse(EmailChannelResponse emailChannelResponse) {
        this.emailChannelResponse = emailChannelResponse;
        return this;
    }
}