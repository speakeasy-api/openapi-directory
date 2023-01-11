package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResolverEndpointRequest {
    public DeleteResolverEndpointHeaders headers;
    public DeleteResolverEndpointRequest withHeaders(DeleteResolverEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResolverEndpointRequest request;
    public DeleteResolverEndpointRequest withRequest(openapisdk.models.shared.DeleteResolverEndpointRequest request) {
        this.request = request;
        return this;
    }
}