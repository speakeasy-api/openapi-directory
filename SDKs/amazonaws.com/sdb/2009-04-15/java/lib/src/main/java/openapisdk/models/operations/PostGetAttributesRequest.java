package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAttributesRequest {
    public PostGetAttributesQueryParams queryParams;
    public PostGetAttributesRequest withQueryParams(PostGetAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}