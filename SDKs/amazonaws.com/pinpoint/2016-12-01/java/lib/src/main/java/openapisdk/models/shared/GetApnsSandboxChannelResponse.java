package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApnsSandboxChannelResponse {
    @JsonProperty("APNSSandboxChannelResponse")
    public ApnsSandboxChannelResponse apnsSandboxChannelResponse;
    public GetApnsSandboxChannelResponse withApnsSandboxChannelResponse(ApnsSandboxChannelResponse apnsSandboxChannelResponse) {
        this.apnsSandboxChannelResponse = apnsSandboxChannelResponse;
        return this;
    }
}