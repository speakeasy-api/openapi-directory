package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCallerIdentityRequest {
    public PostGetCallerIdentityQueryParams queryParams;
    public PostGetCallerIdentityRequest withQueryParams(PostGetCallerIdentityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetCallerIdentityHeaders headers;
    public PostGetCallerIdentityRequest withHeaders(PostGetCallerIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetCallerIdentityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}