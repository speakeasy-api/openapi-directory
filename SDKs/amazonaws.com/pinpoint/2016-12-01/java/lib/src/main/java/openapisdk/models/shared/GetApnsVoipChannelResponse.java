package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApnsVoipChannelResponse {
    @JsonProperty("APNSVoipChannelResponse")
    public ApnsVoipChannelResponse apnsVoipChannelResponse;
    public GetApnsVoipChannelResponse withApnsVoipChannelResponse(ApnsVoipChannelResponse apnsVoipChannelResponse) {
        this.apnsVoipChannelResponse = apnsVoipChannelResponse;
        return this;
    }
}