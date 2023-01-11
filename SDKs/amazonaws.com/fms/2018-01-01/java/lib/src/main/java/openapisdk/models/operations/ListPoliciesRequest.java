package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPoliciesRequest {
    public ListPoliciesQueryParams queryParams;
    public ListPoliciesRequest withQueryParams(ListPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPoliciesHeaders headers;
    public ListPoliciesRequest withHeaders(ListPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPoliciesRequest request;
    public ListPoliciesRequest withRequest(openapisdk.models.shared.ListPoliciesRequest request) {
        this.request = request;
        return this;
    }
}