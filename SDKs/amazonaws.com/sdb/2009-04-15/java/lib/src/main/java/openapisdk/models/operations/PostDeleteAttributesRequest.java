package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAttributesRequest {
    public PostDeleteAttributesQueryParams queryParams;
    public PostDeleteAttributesRequest withQueryParams(PostDeleteAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}