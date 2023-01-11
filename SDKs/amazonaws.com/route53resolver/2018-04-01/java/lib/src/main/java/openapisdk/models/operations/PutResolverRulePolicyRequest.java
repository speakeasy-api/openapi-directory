package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutResolverRulePolicyRequest {
    public PutResolverRulePolicyHeaders headers;
    public PutResolverRulePolicyRequest withHeaders(PutResolverRulePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutResolverRulePolicyRequest request;
    public PutResolverRulePolicyRequest withRequest(openapisdk.models.shared.PutResolverRulePolicyRequest request) {
        this.request = request;
        return this;
    }
}