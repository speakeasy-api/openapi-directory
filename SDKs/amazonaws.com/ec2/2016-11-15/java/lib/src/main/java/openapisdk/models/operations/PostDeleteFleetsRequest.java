package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteFleetsRequest {
    public PostDeleteFleetsQueryParams queryParams;
    public PostDeleteFleetsRequest withQueryParams(PostDeleteFleetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteFleetsHeaders headers;
    public PostDeleteFleetsRequest withHeaders(PostDeleteFleetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteFleetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}