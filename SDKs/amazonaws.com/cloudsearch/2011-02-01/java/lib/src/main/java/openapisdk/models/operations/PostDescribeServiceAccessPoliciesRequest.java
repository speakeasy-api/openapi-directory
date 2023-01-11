package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeServiceAccessPoliciesRequest {
    public PostDescribeServiceAccessPoliciesQueryParams queryParams;
    public PostDescribeServiceAccessPoliciesRequest withQueryParams(PostDescribeServiceAccessPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeServiceAccessPoliciesHeaders headers;
    public PostDescribeServiceAccessPoliciesRequest withHeaders(PostDescribeServiceAccessPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeServiceAccessPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}