package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResolverRuleRequest {
    @JsonProperty("ResolverRuleId")
    public String resolverRuleId;
    public GetResolverRuleRequest withResolverRuleId(String resolverRuleId) {
        this.resolverRuleId = resolverRuleId;
        return this;
    }
}