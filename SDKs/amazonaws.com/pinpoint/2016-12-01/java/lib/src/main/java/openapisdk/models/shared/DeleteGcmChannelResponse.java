package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGcmChannelResponse {
    @JsonProperty("GCMChannelResponse")
    public GcmChannelResponse gcmChannelResponse;
    public DeleteGcmChannelResponse withGcmChannelResponse(GcmChannelResponse gcmChannelResponse) {
        this.gcmChannelResponse = gcmChannelResponse;
        return this;
    }
}