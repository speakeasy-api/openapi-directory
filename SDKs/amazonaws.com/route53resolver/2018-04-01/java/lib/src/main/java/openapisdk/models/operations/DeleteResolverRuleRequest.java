package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResolverRuleRequest {
    public DeleteResolverRuleHeaders headers;
    public DeleteResolverRuleRequest withHeaders(DeleteResolverRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResolverRuleRequest request;
    public DeleteResolverRuleRequest withRequest(openapisdk.models.shared.DeleteResolverRuleRequest request) {
        this.request = request;
        return this;
    }
}