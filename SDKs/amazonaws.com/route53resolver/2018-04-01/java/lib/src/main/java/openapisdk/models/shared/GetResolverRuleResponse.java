package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResolverRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverRule")
    public ResolverRule resolverRule;
    public GetResolverRuleResponse withResolverRule(ResolverRule resolverRule) {
        this.resolverRule = resolverRule;
        return this;
    }
}