package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCdnEndpointRequest {
    public UpdateCdnEndpointPathParams pathParams;
    public UpdateCdnEndpointRequest withPathParams(UpdateCdnEndpointPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCdnEndpointRequestBody request;
    public UpdateCdnEndpointRequest withRequest(UpdateCdnEndpointRequestBody request) {
        this.request = request;
        return this;
    }
}