package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResolverRulePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverRulePolicy")
    public String resolverRulePolicy;
    public GetResolverRulePolicyResponse withResolverRulePolicy(String resolverRulePolicy) {
        this.resolverRulePolicy = resolverRulePolicy;
        return this;
    }
}