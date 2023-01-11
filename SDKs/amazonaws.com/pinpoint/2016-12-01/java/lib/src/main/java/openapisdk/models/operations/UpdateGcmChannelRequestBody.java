package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGcmChannelRequestBody {
    @JsonProperty("GCMChannelRequest")
    public UpdateGcmChannelRequestBodyGcmChannelRequest gcmChannelRequest;
    public UpdateGcmChannelRequestBody withGcmChannelRequest(UpdateGcmChannelRequestBodyGcmChannelRequest gcmChannelRequest) {
        this.gcmChannelRequest = gcmChannelRequest;
        return this;
    }
}