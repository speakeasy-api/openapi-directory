package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResolverRuleAssociationRequest {
    public GetResolverRuleAssociationHeaders headers;
    public GetResolverRuleAssociationRequest withHeaders(GetResolverRuleAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResolverRuleAssociationRequest request;
    public GetResolverRuleAssociationRequest withRequest(openapisdk.models.shared.GetResolverRuleAssociationRequest request) {
        this.request = request;
        return this;
    }
}