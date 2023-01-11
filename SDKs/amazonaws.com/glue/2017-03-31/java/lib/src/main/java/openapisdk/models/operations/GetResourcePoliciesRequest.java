package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcePoliciesRequest {
    public GetResourcePoliciesQueryParams queryParams;
    public GetResourcePoliciesRequest withQueryParams(GetResourcePoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResourcePoliciesHeaders headers;
    public GetResourcePoliciesRequest withHeaders(GetResourcePoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResourcePoliciesRequest request;
    public GetResourcePoliciesRequest withRequest(openapisdk.models.shared.GetResourcePoliciesRequest request) {
        this.request = request;
        return this;
    }
}