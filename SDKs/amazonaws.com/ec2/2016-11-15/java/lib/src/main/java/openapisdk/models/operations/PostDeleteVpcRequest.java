package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcRequest {
    public PostDeleteVpcQueryParams queryParams;
    public PostDeleteVpcRequest withQueryParams(PostDeleteVpcQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVpcHeaders headers;
    public PostDeleteVpcRequest withHeaders(PostDeleteVpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVpcRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}