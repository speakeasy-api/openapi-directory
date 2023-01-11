package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateResolverRuleRequest {
    public AssociateResolverRuleHeaders headers;
    public AssociateResolverRuleRequest withHeaders(AssociateResolverRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateResolverRuleRequest request;
    public AssociateResolverRuleRequest withRequest(openapisdk.models.shared.AssociateResolverRuleRequest request) {
        this.request = request;
        return this;
    }
}