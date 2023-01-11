package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSelectRequest {
    public PostSelectQueryParams queryParams;
    public PostSelectRequest withQueryParams(PostSelectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSelectRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}