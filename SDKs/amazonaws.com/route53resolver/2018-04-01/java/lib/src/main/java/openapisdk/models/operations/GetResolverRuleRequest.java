package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolverRuleRequest {
    public GetResolverRuleHeaders headers;
    public GetResolverRuleRequest withHeaders(GetResolverRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResolverRuleRequest request;
    public GetResolverRuleRequest withRequest(openapisdk.models.shared.GetResolverRuleRequest request) {
        this.request = request;
        return this;
    }
}