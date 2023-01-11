package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApnsVoipChannelResponse {
    @JsonProperty("APNSVoipChannelResponse")
    public ApnsVoipChannelResponse apnsVoipChannelResponse;
    public UpdateApnsVoipChannelResponse withApnsVoipChannelResponse(ApnsVoipChannelResponse apnsVoipChannelResponse) {
        this.apnsVoipChannelResponse = apnsVoipChannelResponse;
        return this;
    }
}