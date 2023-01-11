package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDefaultSubnetRequest {
    public PostCreateDefaultSubnetQueryParams queryParams;
    public PostCreateDefaultSubnetRequest withQueryParams(PostCreateDefaultSubnetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDefaultSubnetHeaders headers;
    public PostCreateDefaultSubnetRequest withHeaders(PostCreateDefaultSubnetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDefaultSubnetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}