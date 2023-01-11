package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApnsSandboxChannelResponse {
    @JsonProperty("APNSSandboxChannelResponse")
    public ApnsSandboxChannelResponse apnsSandboxChannelResponse;
    public UpdateApnsSandboxChannelResponse withApnsSandboxChannelResponse(ApnsSandboxChannelResponse apnsSandboxChannelResponse) {
        this.apnsSandboxChannelResponse = apnsSandboxChannelResponse;
        return this;
    }
}