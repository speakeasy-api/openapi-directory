package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolverRulePolicyRequest {
    public GetResolverRulePolicyHeaders headers;
    public GetResolverRulePolicyRequest withHeaders(GetResolverRulePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResolverRulePolicyRequest request;
    public GetResolverRulePolicyRequest withRequest(openapisdk.models.shared.GetResolverRulePolicyRequest request) {
        this.request = request;
        return this;
    }
}