package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSecurityPoliciesRequest {
    public ListSecurityPoliciesQueryParams queryParams;
    public ListSecurityPoliciesRequest withQueryParams(ListSecurityPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSecurityPoliciesHeaders headers;
    public ListSecurityPoliciesRequest withHeaders(ListSecurityPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSecurityPoliciesRequest request;
    public ListSecurityPoliciesRequest withRequest(openapisdk.models.shared.ListSecurityPoliciesRequest request) {
        this.request = request;
        return this;
    }
}