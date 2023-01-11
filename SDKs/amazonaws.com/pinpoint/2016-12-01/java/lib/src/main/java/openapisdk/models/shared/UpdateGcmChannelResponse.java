package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGcmChannelResponse {
    @JsonProperty("GCMChannelResponse")
    public GcmChannelResponse gcmChannelResponse;
    public UpdateGcmChannelResponse withGcmChannelResponse(GcmChannelResponse gcmChannelResponse) {
        this.gcmChannelResponse = gcmChannelResponse;
        return this;
    }
}