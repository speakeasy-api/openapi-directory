package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApnsSandboxChannelResponse {
    @JsonProperty("APNSSandboxChannelResponse")
    public ApnsSandboxChannelResponse apnsSandboxChannelResponse;
    public DeleteApnsSandboxChannelResponse withApnsSandboxChannelResponse(ApnsSandboxChannelResponse apnsSandboxChannelResponse) {
        this.apnsSandboxChannelResponse = apnsSandboxChannelResponse;
        return this;
    }
}