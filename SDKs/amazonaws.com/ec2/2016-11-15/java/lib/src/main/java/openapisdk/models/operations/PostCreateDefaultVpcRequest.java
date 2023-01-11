package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDefaultVpcRequest {
    public PostCreateDefaultVpcQueryParams queryParams;
    public PostCreateDefaultVpcRequest withQueryParams(PostCreateDefaultVpcQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDefaultVpcHeaders headers;
    public PostCreateDefaultVpcRequest withHeaders(PostCreateDefaultVpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDefaultVpcRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}