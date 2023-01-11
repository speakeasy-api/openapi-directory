package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResolverEndpointRequest {
    public UpdateResolverEndpointHeaders headers;
    public UpdateResolverEndpointRequest withHeaders(UpdateResolverEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateResolverEndpointRequest request;
    public UpdateResolverEndpointRequest withRequest(openapisdk.models.shared.UpdateResolverEndpointRequest request) {
        this.request = request;
        return this;
    }
}