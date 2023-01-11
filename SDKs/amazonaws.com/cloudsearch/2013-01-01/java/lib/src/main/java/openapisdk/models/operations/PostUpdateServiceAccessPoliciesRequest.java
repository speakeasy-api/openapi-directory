package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateServiceAccessPoliciesRequest {
    public PostUpdateServiceAccessPoliciesQueryParams queryParams;
    public PostUpdateServiceAccessPoliciesRequest withQueryParams(PostUpdateServiceAccessPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateServiceAccessPoliciesHeaders headers;
    public PostUpdateServiceAccessPoliciesRequest withHeaders(PostUpdateServiceAccessPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateServiceAccessPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}