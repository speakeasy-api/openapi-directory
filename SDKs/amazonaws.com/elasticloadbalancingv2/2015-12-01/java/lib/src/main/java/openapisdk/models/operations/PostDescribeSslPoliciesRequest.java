package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSslPoliciesRequest {
    public PostDescribeSslPoliciesQueryParams queryParams;
    public PostDescribeSslPoliciesRequest withQueryParams(PostDescribeSslPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSslPoliciesHeaders headers;
    public PostDescribeSslPoliciesRequest withHeaders(PostDescribeSslPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSslPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}