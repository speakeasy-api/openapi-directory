package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApnsSandboxChannelRequestBody {
    @JsonProperty("APNSSandboxChannelRequest")
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest apnsSandboxChannelRequest;
    public UpdateApnsSandboxChannelRequestBody withApnsSandboxChannelRequest(UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest apnsSandboxChannelRequest) {
        this.apnsSandboxChannelRequest = apnsSandboxChannelRequest;
        return this;
    }
}