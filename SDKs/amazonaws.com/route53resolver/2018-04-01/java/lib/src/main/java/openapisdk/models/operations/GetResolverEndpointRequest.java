package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolverEndpointRequest {
    public GetResolverEndpointHeaders headers;
    public GetResolverEndpointRequest withHeaders(GetResolverEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResolverEndpointRequest request;
    public GetResolverEndpointRequest withRequest(openapisdk.models.shared.GetResolverEndpointRequest request) {
        this.request = request;
        return this;
    }
}