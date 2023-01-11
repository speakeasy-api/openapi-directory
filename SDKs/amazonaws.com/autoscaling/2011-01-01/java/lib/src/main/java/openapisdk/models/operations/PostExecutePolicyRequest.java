package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExecutePolicyRequest {
    public PostExecutePolicyQueryParams queryParams;
    public PostExecutePolicyRequest withQueryParams(PostExecutePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostExecutePolicyHeaders headers;
    public PostExecutePolicyRequest withHeaders(PostExecutePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostExecutePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}