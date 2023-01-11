package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResolverRuleRequest {
    public CreateResolverRuleHeaders headers;
    public CreateResolverRuleRequest withHeaders(CreateResolverRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateResolverRuleRequest request;
    public CreateResolverRuleRequest withRequest(openapisdk.models.shared.CreateResolverRuleRequest request) {
        this.request = request;
        return this;
    }
}