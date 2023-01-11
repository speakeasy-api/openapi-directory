package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApnsChannelResponse {
    @JsonProperty("APNSChannelResponse")
    public ApnsChannelResponse apnsChannelResponse;
    public UpdateApnsChannelResponse withApnsChannelResponse(ApnsChannelResponse apnsChannelResponse) {
        this.apnsChannelResponse = apnsChannelResponse;
        return this;
    }
}