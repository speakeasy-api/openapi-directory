package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSubnetRequest {
    public PostCreateSubnetQueryParams queryParams;
    public PostCreateSubnetRequest withQueryParams(PostCreateSubnetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSubnetHeaders headers;
    public PostCreateSubnetRequest withHeaders(PostCreateSubnetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSubnetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}