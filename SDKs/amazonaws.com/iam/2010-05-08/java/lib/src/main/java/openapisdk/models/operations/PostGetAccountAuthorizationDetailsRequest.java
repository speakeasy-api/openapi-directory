package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccountAuthorizationDetailsRequest {
    public PostGetAccountAuthorizationDetailsQueryParams queryParams;
    public PostGetAccountAuthorizationDetailsRequest withQueryParams(PostGetAccountAuthorizationDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetAccountAuthorizationDetailsHeaders headers;
    public PostGetAccountAuthorizationDetailsRequest withHeaders(PostGetAccountAuthorizationDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetAccountAuthorizationDetailsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}