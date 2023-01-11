package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutAttributesRequest {
    public PostPutAttributesQueryParams queryParams;
    public PostPutAttributesRequest withQueryParams(PostPutAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}