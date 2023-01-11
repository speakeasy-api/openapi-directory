package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLbCookieStickinessPolicyRequest {
    public PostCreateLbCookieStickinessPolicyQueryParams queryParams;
    public PostCreateLbCookieStickinessPolicyRequest withQueryParams(PostCreateLbCookieStickinessPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLbCookieStickinessPolicyHeaders headers;
    public PostCreateLbCookieStickinessPolicyRequest withHeaders(PostCreateLbCookieStickinessPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLbCookieStickinessPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}