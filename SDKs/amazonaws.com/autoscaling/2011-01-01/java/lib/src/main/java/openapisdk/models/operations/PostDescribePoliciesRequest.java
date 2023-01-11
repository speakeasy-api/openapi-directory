package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePoliciesRequest {
    public PostDescribePoliciesQueryParams queryParams;
    public PostDescribePoliciesRequest withQueryParams(PostDescribePoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribePoliciesHeaders headers;
    public PostDescribePoliciesRequest withHeaders(PostDescribePoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribePoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}