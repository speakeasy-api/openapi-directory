package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteResolverRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverRule")
    public ResolverRule resolverRule;
    public DeleteResolverRuleResponse withResolverRule(ResolverRule resolverRule) {
        this.resolverRule = resolverRule;
        return this;
    }
}