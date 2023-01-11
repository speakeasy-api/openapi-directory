package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateResolverRuleRequest {
    public DisassociateResolverRuleHeaders headers;
    public DisassociateResolverRuleRequest withHeaders(DisassociateResolverRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateResolverRuleRequest request;
    public DisassociateResolverRuleRequest withRequest(openapisdk.models.shared.DisassociateResolverRuleRequest request) {
        this.request = request;
        return this;
    }
}