package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbClusterEndpointRequest {
    public PostModifyDbClusterEndpointQueryParams queryParams;
    public PostModifyDbClusterEndpointRequest withQueryParams(PostModifyDbClusterEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbClusterEndpointHeaders headers;
    public PostModifyDbClusterEndpointRequest withHeaders(PostModifyDbClusterEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbClusterEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}