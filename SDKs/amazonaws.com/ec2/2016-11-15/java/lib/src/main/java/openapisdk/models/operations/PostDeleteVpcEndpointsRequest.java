package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcEndpointsRequest {
    public PostDeleteVpcEndpointsQueryParams queryParams;
    public PostDeleteVpcEndpointsRequest withQueryParams(PostDeleteVpcEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVpcEndpointsHeaders headers;
    public PostDeleteVpcEndpointsRequest withHeaders(PostDeleteVpcEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVpcEndpointsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}