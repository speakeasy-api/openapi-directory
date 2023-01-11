package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetStatusRequest {
    public PostGetStatusQueryParams queryParams;
    public PostGetStatusRequest withQueryParams(PostGetStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetStatusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}