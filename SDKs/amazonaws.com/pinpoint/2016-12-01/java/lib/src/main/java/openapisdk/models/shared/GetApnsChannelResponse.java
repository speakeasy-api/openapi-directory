package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApnsChannelResponse {
    @JsonProperty("APNSChannelResponse")
    public ApnsChannelResponse apnsChannelResponse;
    public GetApnsChannelResponse withApnsChannelResponse(ApnsChannelResponse apnsChannelResponse) {
        this.apnsChannelResponse = apnsChannelResponse;
        return this;
    }
}