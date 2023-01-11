package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListObjectPoliciesRequest {
    public ListObjectPoliciesQueryParams queryParams;
    public ListObjectPoliciesRequest withQueryParams(ListObjectPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListObjectPoliciesHeaders headers;
    public ListObjectPoliciesRequest withHeaders(ListObjectPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListObjectPoliciesRequestBody request;
    public ListObjectPoliciesRequest withRequest(ListObjectPoliciesRequestBody request) {
        this.request = request;
        return this;
    }
}