package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetServiceLastAccessedDetailsRequest {
    public PostGetServiceLastAccessedDetailsQueryParams queryParams;
    public PostGetServiceLastAccessedDetailsRequest withQueryParams(PostGetServiceLastAccessedDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetServiceLastAccessedDetailsHeaders headers;
    public PostGetServiceLastAccessedDetailsRequest withHeaders(PostGetServiceLastAccessedDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetServiceLastAccessedDetailsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}