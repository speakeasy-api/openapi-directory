package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResolverRuleAssociationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverRuleAssociation")
    public ResolverRuleAssociation resolverRuleAssociation;
    public GetResolverRuleAssociationResponse withResolverRuleAssociation(ResolverRuleAssociation resolverRuleAssociation) {
        this.resolverRuleAssociation = resolverRuleAssociation;
        return this;
    }
}