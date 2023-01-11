package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAdmChannelRequest {
    public UpdateAdmChannelPathParams pathParams;
    public UpdateAdmChannelRequest withPathParams(UpdateAdmChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAdmChannelHeaders headers;
    public UpdateAdmChannelRequest withHeaders(UpdateAdmChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAdmChannelRequestBody request;
    public UpdateAdmChannelRequest withRequest(UpdateAdmChannelRequestBody request) {
        this.request = request;
        return this;
    }
}