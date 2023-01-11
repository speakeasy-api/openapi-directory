package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPasswordDataRequest {
    public PostGetPasswordDataQueryParams queryParams;
    public PostGetPasswordDataRequest withQueryParams(PostGetPasswordDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetPasswordDataHeaders headers;
    public PostGetPasswordDataRequest withHeaders(PostGetPasswordDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetPasswordDataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}