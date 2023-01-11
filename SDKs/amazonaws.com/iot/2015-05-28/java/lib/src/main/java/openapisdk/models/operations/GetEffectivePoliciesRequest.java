package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEffectivePoliciesRequest {
    public GetEffectivePoliciesQueryParams queryParams;
    public GetEffectivePoliciesRequest withQueryParams(GetEffectivePoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEffectivePoliciesHeaders headers;
    public GetEffectivePoliciesRequest withHeaders(GetEffectivePoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetEffectivePoliciesRequestBody request;
    public GetEffectivePoliciesRequest withRequest(GetEffectivePoliciesRequestBody request) {
        this.request = request;
        return this;
    }
}