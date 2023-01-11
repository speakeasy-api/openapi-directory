package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListKeyPoliciesRequest {
    public ListKeyPoliciesQueryParams queryParams;
    public ListKeyPoliciesRequest withQueryParams(ListKeyPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListKeyPoliciesHeaders headers;
    public ListKeyPoliciesRequest withHeaders(ListKeyPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListKeyPoliciesRequest request;
    public ListKeyPoliciesRequest withRequest(openapisdk.models.shared.ListKeyPoliciesRequest request) {
        this.request = request;
        return this;
    }
}