package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApnsChannelResponse {
    @JsonProperty("APNSChannelResponse")
    public ApnsChannelResponse apnsChannelResponse;
    public DeleteApnsChannelResponse withApnsChannelResponse(ApnsChannelResponse apnsChannelResponse) {
        this.apnsChannelResponse = apnsChannelResponse;
        return this;
    }
}