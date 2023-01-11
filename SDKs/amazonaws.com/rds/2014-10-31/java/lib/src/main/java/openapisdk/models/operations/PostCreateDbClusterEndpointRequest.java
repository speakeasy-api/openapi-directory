package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbClusterEndpointRequest {
    public PostCreateDbClusterEndpointQueryParams queryParams;
    public PostCreateDbClusterEndpointRequest withQueryParams(PostCreateDbClusterEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbClusterEndpointHeaders headers;
    public PostCreateDbClusterEndpointRequest withHeaders(PostCreateDbClusterEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbClusterEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}