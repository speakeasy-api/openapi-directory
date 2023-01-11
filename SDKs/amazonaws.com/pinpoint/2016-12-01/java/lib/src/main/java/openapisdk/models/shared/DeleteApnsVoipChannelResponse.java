package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApnsVoipChannelResponse {
    @JsonProperty("APNSVoipChannelResponse")
    public ApnsVoipChannelResponse apnsVoipChannelResponse;
    public DeleteApnsVoipChannelResponse withApnsVoipChannelResponse(ApnsVoipChannelResponse apnsVoipChannelResponse) {
        this.apnsVoipChannelResponse = apnsVoipChannelResponse;
        return this;
    }
}