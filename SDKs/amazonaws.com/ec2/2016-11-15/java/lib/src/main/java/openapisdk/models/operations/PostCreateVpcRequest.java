package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcRequest {
    public PostCreateVpcQueryParams queryParams;
    public PostCreateVpcRequest withQueryParams(PostCreateVpcQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVpcHeaders headers;
    public PostCreateVpcRequest withHeaders(PostCreateVpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVpcRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}