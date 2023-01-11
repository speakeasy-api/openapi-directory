package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGcmChannelResponse {
    @JsonProperty("GCMChannelResponse")
    public GcmChannelResponse gcmChannelResponse;
    public GetGcmChannelResponse withGcmChannelResponse(GcmChannelResponse gcmChannelResponse) {
        this.gcmChannelResponse = gcmChannelResponse;
        return this;
    }
}