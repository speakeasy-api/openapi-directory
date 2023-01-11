package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVoiceChannelRequest {
    public UpdateVoiceChannelPathParams pathParams;
    public UpdateVoiceChannelRequest withPathParams(UpdateVoiceChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateVoiceChannelHeaders headers;
    public UpdateVoiceChannelRequest withHeaders(UpdateVoiceChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateVoiceChannelRequestBody request;
    public UpdateVoiceChannelRequest withRequest(UpdateVoiceChannelRequestBody request) {
        this.request = request;
        return this;
    }
}