package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResolverEndpointRequest {
    public CreateResolverEndpointHeaders headers;
    public CreateResolverEndpointRequest withHeaders(CreateResolverEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateResolverEndpointRequest request;
    public CreateResolverEndpointRequest withRequest(openapisdk.models.shared.CreateResolverEndpointRequest request) {
        this.request = request;
        return this;
    }
}