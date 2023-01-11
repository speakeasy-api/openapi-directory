package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbClusterEndpointRequest {
    public PostDeleteDbClusterEndpointQueryParams queryParams;
    public PostDeleteDbClusterEndpointRequest withQueryParams(PostDeleteDbClusterEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbClusterEndpointHeaders headers;
    public PostDeleteDbClusterEndpointRequest withHeaders(PostDeleteDbClusterEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbClusterEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}