package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOptionGroupRequest {
    public PostCreateOptionGroupQueryParams queryParams;
    public PostCreateOptionGroupRequest withQueryParams(PostCreateOptionGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateOptionGroupHeaders headers;
    public PostCreateOptionGroupRequest withHeaders(PostCreateOptionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateOptionGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}