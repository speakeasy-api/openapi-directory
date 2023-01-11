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
    public GetResourcePoliciesRequestBody request;
    public GetResourcePoliciesRequest withRequest(GetResourcePoliciesRequestBody request) {
        this.request = request;
        return this;
    }
}