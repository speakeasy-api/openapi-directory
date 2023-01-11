package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResolverRuleRequest {
    public UpdateResolverRuleHeaders headers;
    public UpdateResolverRuleRequest withHeaders(UpdateResolverRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateResolverRuleRequest request;
    public UpdateResolverRuleRequest withRequest(openapisdk.models.shared.UpdateResolverRuleRequest request) {
        this.request = request;
        return this;
    }
}