package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGcmChannelRequest {
    public UpdateGcmChannelPathParams pathParams;
    public UpdateGcmChannelRequest withPathParams(UpdateGcmChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGcmChannelHeaders headers;
    public UpdateGcmChannelRequest withHeaders(UpdateGcmChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGcmChannelRequestBody request;
    public UpdateGcmChannelRequest withRequest(UpdateGcmChannelRequestBody request) {
        this.request = request;
        return this;
    }
}