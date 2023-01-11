package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResolverRuleAssociationRequest {
    @JsonProperty("ResolverRuleAssociationId")
    public String resolverRuleAssociationId;
    public GetResolverRuleAssociationRequest withResolverRuleAssociationId(String resolverRuleAssociationId) {
        this.resolverRuleAssociationId = resolverRuleAssociationId;
        return this;
    }
}