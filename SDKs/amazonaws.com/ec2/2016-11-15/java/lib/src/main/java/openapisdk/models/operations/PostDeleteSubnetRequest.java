package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSubnetRequest {
    public PostDeleteSubnetQueryParams queryParams;
    public PostDeleteSubnetRequest withQueryParams(PostDeleteSubnetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSubnetHeaders headers;
    public PostDeleteSubnetRequest withHeaders(PostDeleteSubnetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSubnetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}