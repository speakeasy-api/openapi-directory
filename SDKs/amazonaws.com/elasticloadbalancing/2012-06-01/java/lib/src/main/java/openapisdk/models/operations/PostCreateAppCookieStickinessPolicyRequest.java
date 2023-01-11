package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAppCookieStickinessPolicyRequest {
    public PostCreateAppCookieStickinessPolicyQueryParams queryParams;
    public PostCreateAppCookieStickinessPolicyRequest withQueryParams(PostCreateAppCookieStickinessPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateAppCookieStickinessPolicyHeaders headers;
    public PostCreateAppCookieStickinessPolicyRequest withHeaders(PostCreateAppCookieStickinessPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateAppCookieStickinessPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}