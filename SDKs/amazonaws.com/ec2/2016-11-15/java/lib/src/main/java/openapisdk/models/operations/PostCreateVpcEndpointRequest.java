package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcEndpointRequest {
    public PostCreateVpcEndpointQueryParams queryParams;
    public PostCreateVpcEndpointRequest withQueryParams(PostCreateVpcEndpointQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVpcEndpointHeaders headers;
    public PostCreateVpcEndpointRequest withHeaders(PostCreateVpcEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVpcEndpointRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}