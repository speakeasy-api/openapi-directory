package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetFederationTokenRequest {
    public PostGetFederationTokenQueryParams queryParams;
    public PostGetFederationTokenRequest withQueryParams(PostGetFederationTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetFederationTokenHeaders headers;
    public PostGetFederationTokenRequest withHeaders(PostGetFederationTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetFederationTokenRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}